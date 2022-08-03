import React from "react";
import { Pokemon } from "../classes/Pokemon";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";
import "../styles/pods/PokemonPod.css";
import { PokemonStatsPod } from "./PokemonStatsPod";

export const PokemonPod = (props) => {

    let pokemonToRender = new Pokemon(props.pokemon.poke);

    return(
        <div id={`${props.pokemon.poke.name.toLowerCase()}PartyComponent`} className={props.className}>
            <img src={PokemonFNImageImport[Utils.getPokeIdByName(props.pokemon.poke.name)][props.pokemon.poke.name.toLowerCase()]} alt={props.pokemon.poke.name}/>
            <div>{props.pokemon.poke.name} LV: {pokemonToRender.currentLevel()}</div>
            <PokemonStatsPod pokemon={pokemonToRender} />
        </div>
    )
}