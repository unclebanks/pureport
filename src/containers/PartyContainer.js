import React from "react";
import { PartyPokeComponent } from "../components/PartyPokeComponent";
import { useSelector } from "react-redux/es/exports";
import "../styles/PartyContainer.css";

export const PartyContainer = () => {

    const playerPartyPokemon = useSelector((state)=> state.player.pokemon);
    let partyPokemonArray = [];
    playerPartyPokemon.forEach(poke => {
        partyPokemonArray.push(<PartyPokeComponent pokemon={poke} key={poke.name}/>)        
    });
    return(
        <div id="partyContainer" style={{"textAlign": "center", "overflow": "auto"}}>
            <span>Party</span>
            {partyPokemonArray}
        </div>
    )
}