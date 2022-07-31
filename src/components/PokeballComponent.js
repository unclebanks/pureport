import React from "react";
import { ImageImports } from "../data/ImageImports";
import "../styles/PokeballComponent.css";

export const PokeballComponent = (props) => {

    return(
        <div id="pokeballComponent">
            <div>
                <span>Catch: <input type={"checkbox"}/>All <input type={"checkbox"}/> New</span>
            </div>
            <div>
                <div>
                    <input type={"checkbox"}/> <img className="pokeballIcon" src={ImageImports.Pokeballs.Pokeball} alt="Pokeball"/> Pokeball: {props.player.ballsAmount.pokeball}
                </div>
                <div>
                    <input type={"checkbox"}/> <img className="pokeballIcon" src={ImageImports.Pokeballs.Greatball} alt="Greatball"/> Greatball: {props.player.ballsAmount.greatball}
                </div>
                <div>
                    <input type={"checkbox"}/> <img className="pokeballIcon" src={ImageImports.Pokeballs.Ultraball} alt="Ultraball"/> Ultraball: {props.player.ballsAmount.ultraball}
                </div>
                <div>
                    <input type={"checkbox"}/> <img className="pokeballIcon" src={ImageImports.Pokeballs.Masterball} alt="Masterball"/> Masterball: {props.player.ballsAmount.masterball}
                </div>
            </div>
        </div>
    )
}