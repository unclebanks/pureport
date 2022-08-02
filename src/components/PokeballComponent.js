import React from "react";
import { ImageImports } from "../data/ImageImports";
import { useSelector } from "react-redux";
import "../styles/PokeballComponent.css";

export const PokeballComponent = () => {

    let ballsAmountTemp = useSelector((state)=>state.player.ballsAmount);

    return(
        <div id="pokeballComponent">
            <div id="pokeballComponentSpan">
                <span>Catch: <input type={"checkbox"}/>All <input type={"checkbox"}/> New</span>
            </div>
            <div id="pokeballComponentPokeballs">
                <div>
                    <input type={"checkbox"}/> <img className="pokeballIcon" src={ImageImports.Pokeballs.Pokeball} alt="Pokeball"/> Pokeball: {ballsAmountTemp.pokeball}
                </div>
                <div>
                    <input type={"checkbox"}/> <img className="pokeballIcon" src={ImageImports.Pokeballs.Greatball} alt="Greatball"/> Greatball: {ballsAmountTemp.greatball}
                </div>
                <div>
                    <input type={"checkbox"}/> <img className="pokeballIcon" src={ImageImports.Pokeballs.Ultraball} alt="Ultraball"/> Ultraball: {ballsAmountTemp.ultraball}
                </div>
                <div>
                    <input type={"checkbox"}/> <img className="pokeballIcon" src={ImageImports.Pokeballs.Masterball} alt="Masterball"/> Masterball: {ballsAmountTemp.masterball}
                </div>
            </div>
        </div>
    )
}