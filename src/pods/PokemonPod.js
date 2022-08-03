import React from "react";
import { Pokemon } from "../classes/Pokemon";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";
import "../styles/pods/PokemonPod.css";
import { PokemonStatsPod } from "./PokemonStatsPod";

export const PokemonPod = (props) => {

    let pokemonToRender = new Pokemon(props.pokemon);

    return(
        <div id={`${pokemonToRender.name.toLowerCase()}PartyComponent`} className={props.className}>
            <img src={PokemonFNImageImport[Utils.getPokeIdByName(pokemonToRender.name)][pokemonToRender.name.toLowerCase()]} alt={pokemonToRender.name}/>
            <div>{pokemonToRender.name} LV: {pokemonToRender.currentLevel()}</div>
            <PokemonStatsPod pokemon={pokemonToRender} />
        </div>
    )
}