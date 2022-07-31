import React from "react";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";

export const PartyPokeComponent = (props) => {

    return(
        <div id={`${props.pokemon.name}PartyComponent`} className={"partyPokemonComponent"}>
            <img src={PokemonFNImageImport[Utils.getPokeIdByName(props.pokemon.name)][props.pokemon.name]} alt={props.pokemon.name}/>
            <div>{props.pokemon.name}</div>
        </div>
    )
}