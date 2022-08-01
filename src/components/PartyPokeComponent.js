import React from "react";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";

export const PartyPokeComponent = (props) => {


    return(
        <div id={`${props.pokemon.name}PartyComponent`} className={"partyPokemonComponent"}>
            <img src={PokemonFNImageImport[Utils.getPokeIdByName(props.pokemon.name)][props.pokemon.name]} alt={props.pokemon.name}/>
            <div>{props.pokemon.name} LV: {props.pokemon.level}</div>
            <div>HP: {props.pokemon.stats.hp}</div>
            <div>ATK: {props.pokemon.stats.attack}</div>
            <div>DEF: {props.pokemon.stats.defense}</div>
            <div>SP ATK: {props.pokemon.stats["sp atk"]}</div>
            <div>SP DEF: {props.pokemon.stats["sp def"]}</div>
            <div>SPD: {props.pokemon.stats.speed}</div>
        </div>
    )
}