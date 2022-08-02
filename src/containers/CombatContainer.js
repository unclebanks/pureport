import React from "react";
import { useSelector } from "react-redux";
import { Pokemon } from "../classes/Pokemon";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";

export const CombatContainer = () => {

    let currentCombatRoute = useSelector((state)=>state.player.location.route);
    let currentCombatRegion = useSelector((state)=>state.player.location.region);
    let activePokemon = useSelector((state)=>state.player.activePokeID);
    let activePlayerBattlePokemon = useSelector((state)=>state.player.pokemon[activePokemon]);
    let activePlayerPokemonObject = new Pokemon(activePlayerBattlePokemon.name, activePlayerBattlePokemon.level, activePlayerBattlePokemon.shiny, activePlayerBattlePokemon.prestigeLevel);

    console.log(currentCombatRoute);
    console.log(currentCombatRegion);

    return(
        <div id="combatContainer" style={{"display": "grid", "gridTemplateRows": "10% 90%"}}>
            <span>{currentCombatRoute}</span>
            <div style={{"display": "grid", "gridTemplateColumns": "50% 50%"}}>
                <div id="playerActivePokemon" style={{"display": "grid", "gridTemplateRows": "80% 20%"}}>
                    <div id="playerPokemonImageContainer">
                        <img alt="Player Active Pokemon" src={PokemonFNImageImport[Utils.getPokeIdByName(activePlayerPokemonObject.name)][activePlayerPokemonObject.name.toLowerCase()]}/>
                    </div>
                    <div id="playerPokemonStatsContainer">Stats</div>
                </div>
                <div id="wildActivePokemon" style={{"display": "grid", "gridTemplateRows": "80% 20%"}}>
                    <div id="wildPokemonImageContainer">Image</div>
                    <div id="wildPokemonStatsContainer">Stats</div>
                </div>
            </div>
        </div>
    )
}