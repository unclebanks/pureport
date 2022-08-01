import React, { useState } from "react";
import { PokeCenterComponent } from "../components/PokeCenterComponent";
import { PokeGuildComponent } from "../components/PokeGuildComponent";
import { PokeLabComponent } from "../components/PokeLabComponent";
import { PokeMartComponent } from "../components/PokeMartComponent";
import "../styles/containers/MainActiveWindowContainer.css";

export const MainActiveWindowContainer = () => {

    const [mainActiveWindowState, setMainActiveWindowState] = useState("main");
    let mainActiveWindowToReturn;

    const defaultMainActiveWindow = 
        <div id="defaultMainActiveWindow">
            <div id="defaultMainActiveWindowPokeMart">
                <button onClick={()=>{setMainActiveWindowState("pokeMart")}}>PokeMart IMAGE HERE. CLICK TO GO</button>
            </div>
            <div id="defaultMainActiveWindowPokeCenter">
                <button onClick={()=>{setMainActiveWindowState("pokeCenter")}}>PokeCenter IMAGE HERE. CLICK TO GO</button>
            </div>
            <div id="defaultMainActiveWindowLab">
                <button onClick={()=>{setMainActiveWindowState("pokeLab")}}>LAB IMAGE HERE. CLICK TO GO</button>
            </div>
            <div id="defaultMainActiveWindowGuild">
                <button onClick={()=>{setMainActiveWindowState("pokeGuild")}}>Guild IMAGE HERE. CLICK TO GO</button>
            </div>
            <div id="defaultMainActiveWindowPokeDex">
                <button>POKEDEX</button>
            </div>
            <div id="defaultMainActiveWindowPokemon">
                <button>POKEMON</button>
            </div>
            <div id="defaultMainActiveWindowBag">
                <button>BAG</button>
            </div>
            <div id="defaultMainActiveWindowSettings">
                <button>SETTINGS</button>
            </div>
            <div id="defaultMainActiveWindowLOCKED">
                <button onClick={()=>{alert("This feature is still being planned. Thank you for your patience.")}}>LOCKED</button>
            </div>
        </div>

    switch(mainActiveWindowState) {
        case "main": mainActiveWindowToReturn = defaultMainActiveWindow;
        break;
        case "pokeCenter": mainActiveWindowToReturn = <PokeCenterComponent />;
        break;
        case "pokeMart": mainActiveWindowToReturn = <PokeMartComponent />;
        break;
        case "pokeGuild": mainActiveWindowToReturn = <PokeGuildComponent />;
        break;
        case "pokeLab": mainActiveWindowToReturn = <PokeLabComponent />;
        break;
        default: mainActiveWindowToReturn = "There was an error loading the mainActiveWindowToReturn, please contact the dev.";
    }
    
    return(
        <div id="mainActiveWindowContainer">
            {mainActiveWindowToReturn}
        </div>
    )
}