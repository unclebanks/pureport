import React from "react";
import { Pokemon } from "../classes/Pokemon";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";
import "../styles/pods/PokemonPod.css";
import { PokemonStatsPod } from "./PokemonStatsPod";

export const PokemonPod = (props) => {

    let pokemonToRender = new Pokemon(props.pokemon.poke);
    console.log(pokemonToRender.currentLevel());

    return(
        <div id={`${props.pokemon.poke.name.toLowerCase()}PartyComponent`} className={props.className}>
            <img src={PokemonFNImageImport[Utils.getPokeIdByName(props.pokemon.poke.name)][props.pokemon.poke.name.toLowerCase()]} alt={props.pokemon.poke.name}/>
            <div>{props.pokemon.poke.name} LV: {props.pokemon.poke.level}</div>
            <PokemonStatsPod pokemon={props.pokemon.poke} />
        </div>
    )
}