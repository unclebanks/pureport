import { Utils } from "../modules/Utils";
import { TypeModifiers } from "../data/TypeModifiers";

export class Battle {
    constructor(playerActive) {
        this.playerActive = playerActive;
    }
    paused = false;
    type = "";
    enemyPokemonIndex = 0;
    enemyArray = [];
    enemyActive = {};
    playerTimerId = null;
    enemyTimerId = null;
    catchEnabled = false;
    init() {
        if(!this.paused) {
            this.setEnemyActive();
            this.playerTimer();
            this.enemyTimer();
            console.log("Combat Started");
        }
    }
    setEnemyArray(enemyArray) {
        this.enemyArray = enemyArray;
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
        this.enemyTimerId = window.setTimeout(()=>this.dealDamage(this.enemyActive, this.playerActive, "enemy"), nextAttack);
    };
    calculateDamageMultiplier(attackingTypes, defendingTypes) {
        const typeEffectiveness = (attackingType, defendingTypes) => TypeModifiers[attackingType][defendingTypes[0]] * ((defendingTypes[1] && TypeModifiers[attackingType][defendingTypes[1]]) || 1);
        return Math.max(
            typeEffectiveness(attackingTypes[0], defendingTypes),
            (attackingTypes[1] && typeEffectiveness(attackingTypes[1], defendingTypes)) || 0,
        );
    };
    dealDamage(attacker, defender, who) {
        console.log(attacker+" ===== Attacked");
        console.log(attacker.stats.hp)
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
                // dom.renderPokeOnContainer('enemy', enemy.activePoke(), 'front', player.settings.theme || 'dark', player.settings.currentRegionId);
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

            if (((who === 'enemy') && !attacker.alive())
            || ((who === 'player') && !defender.alive())) {
                console.log("Enemy Died");
                this.enemyFaint();
            } else {
                console.log("Player Died");
                this.playerFaint();
            }
            //dom.renderPokeOnContainer('enemy', enemy.activePoke(), 'front', player.settings.theme || 'dark', player.settings.currentRegionId);
        }
    }
}