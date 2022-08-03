import React from "react";
import { useSelector } from "react-redux";
import "../styles/PokeballComponent.css";
import { PokeballPod } from "../pods/PokeballPod";

export const PokeballComponent = () => {

    let ballsAmountTemp = useSelector((state)=>state.player.ballsAmount);

    return(
        <div id="pokeballComponent">
            <div id="pokeballComponentSpan">
                <span>Catch: <input type={"checkbox"}/>All <input type={"checkbox"}/> New</span>
            </div>
            <div id="pokeballComponentPokeballs">
                <PokeballPod type={ "Pokeball" } amount={ ballsAmountTemp.pokeball } />
                <PokeballPod type={ "Greatball" } amount={ ballsAmountTemp.greatball } />
                <PokeballPod type={ "Ultraball" } amount={ ballsAmountTemp.ultraball } />
                <PokeballPod type={ "Masterball" } amount={ ballsAmountTemp.masterball } />
            </div>
        </div>
    )
}