import React from "react";
import "../styles/pods/PokemonStatsPod.css";

export const PokemonStatsPod = (props) => {

    return(
        <div id="pokemonStatsComponent">
            <div>HP: {props.pokemon.computedStats["hp"]}</div>
            <div>ATK: {props.pokemon.computedStats["atk"]}</div>
            <div>DEF: {props.pokemon.computedStats["def"]}</div>
            <div>SP ATK: {props.pokemon.computedStats["spAtk"]}</div>
            <div>SP DEF: {props.pokemon.computedStats["spDef"]}</div>
            <div>SPD: {props.pokemon.computedStats["speed"]}</div>
        </div>
    )
}