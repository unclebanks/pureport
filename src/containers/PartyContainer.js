import React from "react";
import { useSelector } from "react-redux/es/exports";
import { PokemonPod } from "../pods/PokemonPod";
import "../styles/PartyContainer.css";

export const PartyContainer = () => {

    const playerPartyPokemon = useSelector((state)=> state.player.pokemon);
    let partyPokemonArray = [];
    let i = 0;
    while (i < playerPartyPokemon.length) {
        partyPokemonArray.push(<PokemonPod pokemon={i}/>);
        i++;
    }
    // playerPartyPokemon.forEach(poke => {
    //     partyPokemonArray.push(<PokemonPod pokemon={poke} className={"partyPokemonComponent"}/>)        
    // });
    return(
        <div id="partyContainer" style={{"textAlign": "center", "overflow": "auto"}}>
            <span>Party</span>
            {partyPokemonArray}
        </div>
    )
}