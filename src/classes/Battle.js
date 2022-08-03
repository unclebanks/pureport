import { Utils } from "../modules/Utils";
import { TypeModifiers } from "../data/TypeModifiers";
import { POKEDEXFLAGS } from "../data/PokedexFlags";
import { useSelector } from "react-redux";

export class Battle {
    constructor(playerActive) {
        this.playerActive = playerActive;
    }

    // paused = false;
    // type = "";
    // playerData = Utils.loadPlayer(useSelector((state => state.player)));
    // enemyPokemonIndex = 0;
    // enemyArray = [];
    // enemyActive = {};
    // playerTimerId = null;
    // enemyTimerId = null;
    // catchEnabled = false;
    // init() {
    //     if(!this.paused) {
    //         this.setEnemyActive();
    //         this.playerTimer();
    //         this.enemyTimer();
    //         console.log("Combat Started");
    //     }
    // };
    setEnemyArray(enemyArray) {
        this.enemyArray = enemyArray;
        this.setEnemyActive();
    };
    setEnemyActive() {
        this.enemyActive = this.enemyArray[this.enemyPokemonIndex];
    };
    playerTimer() {
        const nextAttack = this.playerActive.attackSpeed();
        console.log("Started Player Timer, next attack ==== "+nextAttack);
        this.playerTimerId = window.setTimeout(()=>this.dealDamage(this.playerActive, this.enemyActive, "player"), nextAttack);
    };
    enemyTimer() {
        const nextAttack = this.enemyActive.attackSpeed();
        this.enemyTimerId = window.setTimeout(()=>this.dealDamage(this.enemyActive, this.playerActive, "enemyActive"), nextAttack);
    };
    calculateDamageMultiplier(attackingTypes, defendingTypes) {
        const typeEffectiveness = (attackingType, defendingTypes) => TypeModifiers[attackingType][defendingTypes[0]] * ((defendingTypes[1] && TypeModifiers[attackingType][defendingTypes[1]]) || 1);
        return Math.max(
            typeEffectiveness(attackingTypes[0], defendingTypes),
            (attackingTypes[1] && typeEffectiveness(attackingTypes[1], defendingTypes)) || 0,
        );
    };attemptCatch() {
        if((this.type !== "gymLeader" && this.playerData.catchEnabled === "all") || (this.playerData.catchEnabled === "new" && !this.playerData.hasPokemonLike(this.enemyActive.poke.name))) {
            const selectedBall = (this.enemyActive.shiny() ? this.playerData.bestAvailableBall() : this.playerData.selectedBall);
            if (this.playerData.consumeBall(selectedBall)) {
            /* <--- if statistics are readded : add throw to statistics
                this.playerData.statistics.totalThrows++;
                this.playerData.statistics[`${selectedBall}Throws`]++; --->*/
                // ----> Need to implement a Utils call to useDispatch(); cannot be done in classes => dom.renderBalls();
                const gainCatchCoins = Math.floor(this.enemyActive.level() * 1) + 1;
                const catchBonus = (this.playerData.unlocked.razzBerry) ? 1.25 : 1;
                const rngHappened = Utils.RNG(((this.enemyActive.catchRate() * this.playerData.ballRNG(selectedBall)) / 3) * catchBonus);
                if (rngHappened) {
                    this.playerData.addCatchCoins(gainCatchCoins);
                    if (this.playerData.hasPokemonLike(this.enemyActive)) {
                        // if (dom.checkConfirmed('#oldCaughtNotification')) {
                        //     notify(`You caught ${this.enemyActive.pokeName()}`);
                        // }
                    }
                    if (!this.playerData.hasPokemonLike(this.enemyActive)) {
                        this.playerData.addPoke(this.enemyActive);
                        // if (dom.checkConfirmed('#newCaughtNotification')) {
                        //     notify(`You caught ${this.enemyActive.pokeName()}`);
                        // }
                    }
                    this.playerData.addPokedex(this.enemyActive.pokeName(), (this.enemyActive.shiny() ? POKEDEXFLAGS.ownShiny : POKEDEXFLAGS.ownNormal));
                    // renderView(dom, enemy, player);
                }
                // if (!rngHappened) {
                //     if (dom.checkConfirmed('#missCatchNotification')) {
                //         notify(`You did not catch ${this.enemyActive.pokeName()}`);
                //     }
                // }
            }
        }
    };
    enemyFaint() {
        // if (enemyActive.activePoke().shiny()) {
        //     player.statistics.shinyBeaten++;
        // }
        // for (let x = 0; x < player.defeatedWith.length; x++) {
        //     if (player.activePoke().pokeName() === player.defeatedWith[x]) {
        //         player.defeatedWith[x]++;
        //     }
        // }
        // for (let a = 0; a < enemyActive.activePoke().types().length; a++) {
        //     player.typeStats.defeatedType[enemyActive.activePoke().types()[a]]++;
        // }
        //player.statistics.beaten++;
        this.attemptCatch();
        console.log(this.enemyActive)
        const foundPokeCoins = Math.floor(this.enemyActive.level() * 4);
        this.playerData.addPokeCoins(foundPokeCoins);

        const beforeExp = this.playerData.getPokemon().map((poke) => poke.level());
        const expToGive = (this.enemyActive.baseExp() / 16) + (this.enemyActive.level() * 3);
        this.playerData.statistics.totalExp += expToGive;
        this.playerData.activePoke().giveExp(expToGive);
        this.playerData.getPokemon().forEach((poke) => poke.giveExp((this.enemyActive.baseExp() / 100) + (this.enemyActive.level() / 10)));
        const afterExp = this.playerData.getPokemon().map((poke) => poke.level());

        // was it a gymLeader poke
        if (this.gymLeader) {
        // remove the pokemon
            this.gymLeaderPoke.splice(this.gymLeaderCurrentID, 1);
            const foundBattleCoins = Math.floor(this.enemyActive.level() * this.gymLeaderPoke.length) + 5;
            this.playerData.addBattleCoins(foundBattleCoins);
            if (this.gymLeaderPoke.length < 1) {
                if (this.gymLeader.badge) {
                    if (!this.playerData.badges[this.gymLeader.badge]) {
                        this.playerData.badges[this.gymLeader.badge] = true;
                        //dom.renderRouteList();
                    }
                }
                if (this.gymLeader.win) {
                    if (!this.playerData.wins[this.gymLeader.win]) {
                        this.playerData.wins[this.gymLeader.win] = true;
                        //dom.renderRouteList();
                    }
                }
                this.gymLeader = null;
                this.pause();
                return false;
            }
        }

        // if (this.playerData.checkBoostedRoamer()) {
        //     dom.renderRouteList();
        // }

        this.playerData.savePokes();
        this.newEnemy();
        this.enemyTimer();
        this.playerTimer();
        //dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back', player.settings.theme || 'dark', player.settings.currentRegionId);
    };
    dealDamage(attacker, defender, who) {
        console.log(attacker+" ===== Attacked");
        console.log(attacker.poke.stats.hp)
        if (!attacker || !defender) return null;
        if (attacker.alive() && defender.alive()) {
            // calculate damage done
            const missRNG = Utils.RNG(5);
            if (!missRNG) {
                const critRNG = Utils.RNG(5);
                const critMultiplier = (critRNG) ? 1 + (attacker.level / 100) : 1;
                const damageMultiplier = this.calculateDamageMultiplier(attacker.types(), defender.types()) * critMultiplier;
                defender.takeDamage(attacker.avgAttack() * damageMultiplier);
                if (who === 'player') {
                // TODO add some flair
                }
                // dom.renderPokeOnContainer('enemyActive', enemyActive.activePoke(), 'front', player.settings.theme || 'dark', player.settings.currentRegionId);
                // dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back', player.settings.theme || 'dark', player.settings.currentRegionId);
            }
            if (who === 'player') {
                //dom.attackAnimation('playerImg', 'right');
                this.playerTimer();
            } else {
                //dom.attackAnimation('enemyImg', 'left');
                this.enemyTimer();
            }
        }
        if (!attacker.alive() || !defender.alive()) {
        // one is dead
            window.clearTimeout(this.playerTimerId);
            window.clearTimeout(this.enemyTimerId);

            if (((who === 'enemyActive') && !attacker.alive())
            || ((who === 'player') && !defender.alive())) {
                console.log("Enemy Died");
                this.enemyFaint();
            } else {
                console.log("Player Died");
                this.playerFaint();
            }
            //dom.renderPokeOnContainer('enemyActive', enemyActive.activePoke(), 'front', player.settings.theme || 'dark', player.settings.currentRegionId);
        }
    }
}