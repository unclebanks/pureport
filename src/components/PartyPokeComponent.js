import React from "react";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";
import "../styles/components/PartyPokeComponent.css";
import { PokemonStatsComponent } from "./PokemonStatsComponent";

export const PartyPokeComponent = (props) => {


    return(
        <div id={`${props.pokemon.name}PartyComponent`} className={"partyPokemonComponent"}>
            <img src={PokemonFNImageImport[Utils.getPokeIdByName(props.pokemon.name)][props.pokemon.name.toLowerCase()]} alt={props.pokemon.name}/>
            <div>{props.pokemon.name} LV: {props.pokemon.level}</div>
            <PokemonStatsComponent pokemon={props.pokemon} />
        </div>
    )
}