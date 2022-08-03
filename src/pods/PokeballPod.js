import React from "react";
import { ImageImports } from "../data/ImageImports";

export const PokeballPod = (props) => {

    return(
        <div>
            <input type={"checkbox"}/> <img className="pokeballIcon" src={ImageImports.Pokeballs[props.type]} alt="Pokeball"/> {props.type}: {props.amount}
        </div>
    )
}