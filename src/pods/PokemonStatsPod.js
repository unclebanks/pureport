import React from "react";
import "../styles/pods/PokemonStatsPod.css";

export const PokemonStatsPod = (props) => {


    return(
        <div id="pokemonStatsComponent">
            <div>HP: {props.pokemon.getHp()}</div>
            <div>ATK: {props.pokemon.attack()}</div>
            <div>DEF: {props.pokemon.defense()}</div>
            <div>SP ATK: {props.pokemon.spAttack()}</div>
            <div>SP DEF: {props.pokemon.spDefense()}</div>
            <div>SPD: {props.pokemon.speed()}</div>
        </div>
    )
}