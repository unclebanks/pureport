import React from "react";
import { useSelector } from "react-redux";
import { Pokemon } from "../classes/Pokemon";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { PokemonBNImageImport } from "../data/PokemonBackNormalImageImports";
import { Utils } from "../modules/Utils";
import { PokemonStatsComponent } from "../components/PokemonStatsComponent";
import ROUTES from "../data/Routes";
import { PokeballComponent } from "../components/PokeballComponent";
import { Battle } from "../classes/Battle";

export const CombatContainer = () => {

    let currentCombatRoute = useSelector((state)=>state.player.location.route);
    let currentCombatRegion = useSelector((state)=>state.player.location.region);
    let activePokemon = useSelector((state)=>state.player.activePokeID);
    let activePlayerBattlePokemon = useSelector((state)=>state.player.pokemon[activePokemon]);
    let activePlayerPokemonObject = new Pokemon(activePlayerBattlePokemon.name, activePlayerBattlePokemon.level, activePlayerBattlePokemon.shiny, activePlayerBattlePokemon.prestigeLevel);
    let enemyActiveArray = Utils.createArrayOfPokemonObjectFromRouteData(ROUTES[currentCombatRegion][Utils.getRouteIndexByName(currentCombatRegion,currentCombatRoute)]);
    console.log(enemyActiveArray);
    let currentBattle = new Battle(activePlayerPokemonObject, enemyActiveArray);
    currentBattle.setEnemyArray(enemyActiveArray);
    currentBattle.setEnemyActive();
    console.log("CurrentBattle");
    console.log(currentBattle);
    console.log("currentEnemy");
    console.log(currentBattle.enemyActive);

    return(
        <div id="combatContainer" style={{"display": "grid", "gridTemplateRows": "10% 90%"}}>
            <span>{currentCombatRoute}</span>
            <div style={{"display": "grid", "gridTemplateColumns": "50% 50%"}}>
                <div id="playerActivePokemon" style={{"display": "grid", "gridTemplateRows": "60% 20% 20%"}}>
                    <div id="playerPokemonImageContainer" style={{"backgroundColor": "lightblue"}}>
                        <img alt="Player Active Pokemon" src={PokemonBNImageImport[Utils.getPokeIdByName(currentBattle.playerActive.name)][currentBattle.playerActive.name.toLowerCase()]}/><br/>
                        <span>{currentBattle.playerActive.name}</span>
                    </div>
                    <div>Hp/EXP/ItemButtons</div>
                    <PokemonStatsComponent pokemon={currentBattle.playerActive} />
                </div>
                <div id="wildActivePokemon" style={{"display": "grid", "gridTemplateRows": "60% 20% 20%"}}>
                    <div id="wildPokemonImageContainer" style={{"backgroundColor": "lightcoral"}}>
                        <img alt="Enemy Active Pokemon" src={PokemonFNImageImport[Utils.getPokeIdByName(currentBattle.enemyActive.name)][currentBattle.enemyActive.name.toLowerCase()]}/><br/>
                        <span>{currentBattle.enemyActive.name}</span>
                    </div>
                    <PokeballComponent />
                    <div id="wildPokemonStatsContainer">
                        <PokemonStatsComponent pokemon={currentBattle.enemyActive} />
                    </div>
                </div>
            </div>
        </div>
    )
}