import React, { useState } from "react";
import { Pokemon } from "../classes/Pokemon";
import { PokemonFNImageImport } from "../data/PokemonFrontNormalImageImports";
import { Utils } from "../modules/Utils";

export const GymTrainerInformationComponent = (props) => {

    let [currentPokeDetails, setCurrentPokeDetails] = useState(0);
    const currentPokemonObj = new Pokemon(props.trainer.poke[currentPokeDetails][0],props.trainer.poke[currentPokeDetails][1]);
    return(
        <div id="gymTrainerInformationComponent" style={{"height": "100%", "display": "grid", "gridTemplateRows": "90% 10%"}}>
            <div>
                <span>{currentPokemonObj.name} Level: {currentPokemonObj.level}</span><br/>
                <img src={PokemonFNImageImport[Utils.getPokeIdByName(currentPokemonObj.name)][currentPokemonObj.name.toLowerCase()]} alt={props.trainer.poke[currentPokeDetails][0]}/>
            </div>
            <div style={{"display": "grid", "gridTemplateColumns": "16% 17% 18% 17% 16% 16%"}}>
                {props.trainer.poke[0]? <button>{props.trainer.poke[0][0]}</button>: ""}
                {props.trainer.poke[1]? <button>{props.trainer.poke[1][0]}</button>: ""}
                {props.trainer.poke[2]? <button>{props.trainer.poke[2][0]}</button>: ""}
                {props.trainer.poke[3]? <button>{props.trainer.poke[3][0]}</button>: ""}
                {props.trainer.poke[4]? <button>{props.trainer.poke[4][0]}</button>: ""}
                {props.trainer.poke[5]? <button>{props.trainer.poke[5][0]}</button>: ""}
            </div>
        </div>
    )
}