import React from "react";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";
import "../styles/components/PartyPokeComponent.css";
import { PokemonStatsComponent } from "./PokemonStatsComponent";

export const PartyPokeComponent = (props) => {

    console.log(props.pokemon.poke.poke.name)


    return(
        <div id={`${props.pokemon.poke.poke.name}PartyComponent`} className={"partyPokemonComponent"}>
            <img src={PokemonFNImageImport[Utils.getPokeIdByName(props.pokemon.poke.poke.name)][props.pokemon.poke.poke.name.toLowerCase()]} alt={props.pokemon.poke.poke.name}/>
            <div>{props.pokemon.poke.poke.name} LV: {props.pokemon.poke.poke.level}</div>
            <PokemonStatsComponent pokemon={props.pokemon.poke.poke} />
        </div>
    )
}