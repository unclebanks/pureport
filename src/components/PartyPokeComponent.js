import React from "react";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";
import "../styles/components/PartyPokeComponent.css";
import { PokemonStatsComponent } from "./PokemonStatsComponent";

export const PartyPokeComponent = (props) => {

    console.log(props.pokemon.poke.name)


    return(
        <div id={`${props.pokemon.poke.name}PartyComponent`} className={"partyPokemonComponent"}>
            <img src={PokemonFNImageImport[Utils.getPokeIdByName(props.pokemon.poke.name)][props.pokemon.poke.name.toLowerCase()]} alt={props.pokemon.poke.name}/>
            <div>{props.pokemon.poke.name} LV: {props.pokemon.poke.level}</div>
            <PokemonStatsComponent pokemon={props.pokemon.poke} />
        </div>
    )
}