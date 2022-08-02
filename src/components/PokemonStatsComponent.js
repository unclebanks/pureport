import React from "react";
import "../styles/components/PokemonStatsComponent.css";

export const PokemonStatsComponent = (props) => {

    return(
        <div id="pokemonStatsComponent">
            <div>HP: {props.pokemon.stats.hp}</div>
            <div>ATK: {props.pokemon.stats.attack}</div>
            <div>DEF: {props.pokemon.stats.defense}</div>
            <div>SP ATK: {props.pokemon.stats["sp atk"]}</div>
            <div>SP DEF: {props.pokemon.stats["sp def"]}</div>
            <div>SPD: {props.pokemon.stats.speed}</div>
        </div>
    )
}