import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pokemon } from "../classes/Pokemon";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { PokemonBNImageImport } from "../data/PokemonBackNormalImageImports";
import { Utils } from "../modules/Utils";
import ROUTES from "../data/Routes";
import { PokeballComponent } from "../components/PokeballComponent";
import { Battle } from "../classes/Battle";
import { PokemonStatsPod } from "../pods/PokemonStatsPod";
import { TypeModifiers } from "../data/TypeModifiers";
import { addCoins, setActive } from "../slices/PlayerSlice";

export const CombatContainer = () => {

    const dispatch = useDispatch();

    let currentCombatArea = useSelector((state)=>state.player.location);
    let activePokemon = useSelector((state)=>state.player.activePokeID);
    let activePlayerBattlePokemon = useSelector((state)=>state.player.pokemon[activePokemon]);
    let enemyActiveArray = Utils.createArrayOfPokemonObjectFromRouteData(ROUTES[currentCombatArea.region][Utils.getRouteIndexByName(currentCombatArea.region,currentCombatArea.route)]);
    const [paused, setPaused] = useState(false);
    let type = "";
    let playerData = Utils.loadPlayer(useSelector((state => state.player)));
    let enemyPokemonIndex = 0;
    let enemyArray = [];
    let enemyActive = {};
    let playerTimerId = null;
    let enemyTimerId = null;
    let catchEnabled = false;

    
    // const dealDamage = (attacker, defender, who) => {
    //     if (!attacker || !defender) return null;
    //     if (attacker.alive() && defender.alive()) {
    //         // calculate damage done
    //         const missRNG = Utils.RNG(5);
    //         if (!missRNG) {
    //             const critRNG = Utils.RNG(5);
    //             const critMultiplier = (critRNG) ? 1 + (attacker.level() / 100) : 1;
    //             const damageMultiplier = calculateDamageMultiplier(attacker.types(), defender.types()) * critMultiplier;
    //             const damage = defender.takeDamage(attacker.avgAttack() * damageMultiplier);
    //             if (who === 'player') {
    //             // TODO add some flair
    //             }
    //             // dom.renderPokeOnContainer('enemy', enemy.activePoke(), 'front', player.settings.theme || 'dark', player.settings.currentRegionId);
    //             // dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back', player.settings.theme || 'dark', player.settings.currentRegionId);
    //         }
    //         if (who === 'player') {
    //             //dom.attackAnimation('playerImg', 'right');
    //             playerTimer();
    //         } else {
    //             //dom.attackAnimation('enemyImg', 'left');
    //             enemyTimer();
    //         }
    //     }
    //     if (!attacker.alive() || !defender.alive()) {
    //     // one is dead
    //         window.clearTimeout(playerTimerId);
    //         window.clearTimeout(enemyTimerId);

    //         if (((who === 'enemy') && !attacker.alive()) || ((who === 'player') && !defender.alive())) {
    //             console.log("enemy");
    //         } else {
    //             playerFaint();
    //         }
    //         //dom.renderPokeOnContainer('enemy', enemy.activePoke(), 'front', player.settings.theme || 'dark', player.settings.currentRegionId);
    //     }
    // };
    // const playerTimer = () => {
    //     const nextAttack = activePlayerBattlePokemon.attackSpeed();
    //     playerTimerId = window.setTimeout(()=> dealDamage(activePlayerBattlePokemon, enemyActive, "player"), nextAttack );
    // };
    // const enemyTimer = () => {
    //     const nextAttack = enemyActive.attackSpeed();
    //     enemyTimerId = window.setTimeout(() => dealDamage(enemyActive, activePlayerBattlePokemon, 'enemy'), nextAttack );
    // };
    // const calculateDamageMultiplier = (attackingTypes, defendingTypes) => {
    //     const typeEffectiveness = (attackingType, defendingTypes) => TypeModifiers[attackingType][defendingTypes[0]] * ((defendingTypes[1] && TypeModifiers[attackingType][defendingTypes[1]]) || 1);
    //     return Math.max(
    //         typeEffectiveness(attackingTypes[0], defendingTypes),
    //         (attackingTypes[1] && typeEffectiveness(attackingTypes[1], defendingTypes)) || 0,
    //     );
    // };
    // const refresh = () => {
    //     window.clearTimeout(playerTimerId);
    //     window.clearTimeout(enemyTimerId);
    // }
    // // ************** convert this and enemyfaint. Good Luck :D
    // const playerFaint = () => {
    //     const alivePokeIndexes = playerData.alivePokeIndexes();
    //     if (alivePokeIndexes.length > 0) {
    //         dispatch(setActive(playerData.getPokemon().indexOf(alivePokeIndexes[0])));
    //         refresh();
    //     } else {
    //         if (type === "prof") {
    //             type = null;
    //             setPaused(true);
    //         }
    //         if (type === "gymLeader") {
    //             type = null;
    //             setPaused(true);
    //         }
    //         if (type === "npc") {
    //             type = null;
    //             setPaused(true);
    //         }
    //     }
    // };
    // const enemyFaint = () => {
    //     attemptCatch();
    //     const foundPokeCoins = Math.floor(enemyActive.level() * 4);
    //     useDispatch(addCoins({"type": "pokecoins", "amount": foundPokeCoins}));

    //     const beforeExp = playerData.pokemon.map((poke) => poke.level());
    //     const expToGive = (enemyActive.baseExp() / 16) + (enemyActive.level() * 3);
    //     playerData.pokemon[activePokemon].giveExp(expToGive);
    //     playerData.pokemon.forEach((poke) => poke.giveExp((enemyActive.baseExp() / 100) + (enemyActive.level() / 10)));
    //     const afterExp = playerData.pokemon.map((poke) => poke.level());

    //     // was it a gymLeader poke
    //     if (type === "gymLeader") {
    //     // remove the pokemon
    //         enemyActiveArray.splice(enemyPokemonIndex, 1);
    //         const foundBattleCoins = Math.floor(enemyActive.level() * enemyActiveArray.length) + 5;
    //         useDispatch(addCoins({"type": "battlecoins", "amount": foundBattleCoins}));
    //         if (Combat.gymLeaderPoke.length < 1) {
    //             if (Combat.gymLeader.badge) {
    //                 if (!player.badges[Combat.gymLeader.badge]) {
    //                     player.badges[Combat.gymLeader.badge] = true;
    //                     dom.renderRouteList();
    //                 }
    //             }
    //             if (Combat.gymLeader.win) {
    //                 if (!player.wins[Combat.gymLeader.win]) {
    //                     player.wins[Combat.gymLeader.win] = true;
    //                     dom.renderRouteList();
    //                 }
    //             }
    //             Combat.gymLeader = null;
    //             Combat.pause();
    //             return false;
    //         }
    //     }

    //     if (player.checkBoostedRoamer()) {
    //         dom.renderRouteList();
    //     }

    //     player.savePokes();
    //     Combat.newEnemy();
    //     Combat.enemyTimer();
    //     Combat.playerTimer();
    //     dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back', player.settings.theme || 'dark', player.settings.currentRegionId);
    // };
    // let currentBattle = new Battle(activePlayerBattlePokemon, enemyActiveArray);
    // currentBattle.setEnemyArray(enemyActiveArray);
    // currentBattle.init();

    if(!paused) {
        enemyActive = enemyActiveArray[enemyPokemonIndex];
        console.log(enemyActive);
    }

    return(
        <div id="combatContainer" style={{"display": "grid", "gridTemplateRows": "10% 90%"}}>
            <span>{currentCombatArea.route}</span>
            <div style={{"display": "grid", "gridTemplateColumns": "50% 50%"}}>
                <div id="playerActivePokemon" style={{"display": "grid", "gridTemplateRows": "60% 20% 20%"}}>
                    <div id="playerPokemonImageContainer" style={{"backgroundColor": "lightblue"}}>
                        <img alt="Player Active Pokemon" src={PokemonBNImageImport[Utils.getPokeIdByName(activePlayerBattlePokemon.name)][activePlayerBattlePokemon.name.toLowerCase()]}/><br/>
                        <span>{activePlayerBattlePokemon.name}</span>
                    </div>
                    <div>Hp/EXP/ItemButtons</div>
                    <PokemonStatsPod pokemon={activePlayerBattlePokemon} />
                </div>
                <div id="wildActivePokemon" style={{"display": "grid", "gridTemplateRows": "60% 20% 20%"}}>
                    <div id="wildPokemonImageContainer" style={{"backgroundColor": "lightcoral"}}>
                        <img alt="Enemy Active Pokemon" src={PokemonFNImageImport[Utils.getPokeIdByName(enemyActive.name)][enemyActive.name.toLowerCase()]}/><br/>
                        <span>{enemyActive.name}</span>
                    </div>
                    <PokeballComponent />
                    <div id="wildPokemonStatsContainer">
                        <PokemonStatsPod pokemon={enemyActive} />
                    </div>
                </div>
            </div>
        </div>
    )
}