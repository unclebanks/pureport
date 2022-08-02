import React from "react";
import "../styles/components/PokemonStatsComponent.css";

export const PokemonStatsComponent = (props) => {
    console.log("POkemonStatsComponent ====== "+props.pokemon);

    let pokemonStatInformation = props.pokemon.stats? props.pokemon.stats: props.pokemon.poke.stats;

    return(
        <div id="pokemonStatsComponent">
            <div>HP: {pokemonStatInformation.hp}</div>
            <div>ATK: {pokemonStatInformation.attack}</div>
            <div>DEF: {pokemonStatInformation.defense}</div>
            <div>SP ATK: {pokemonStatInformation["sp atk"]}</div>
            <div>SP DEF: {pokemonStatInformation["sp def"]}</div>
            <div>SPD: {pokemonStatInformation.speed}</div>
        </div>
    )
}