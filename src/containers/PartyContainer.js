import React from "react";
import { PartyPokeComponent } from "../components/PartyPokeComponent";
import "../styles/PartyContainer.css";

export const PartyContainer = (props) => {

    let partyPokemonArray = [];
    props.player.pokemon.forEach(poke => {
        partyPokemonArray.push(<PartyPokeComponent pokemon={poke} key={poke.name}/>)        
    });
    return(
        <div id="partyContainer" style={{"textAlign": "center", "overflow": "auto"}}>
            <span>Party</span>
            {partyPokemonArray}
        </div>
    )
}