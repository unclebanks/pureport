import React from "react";
import { useSelector } from "react-redux";
import { RegionContainer } from "./RegionContainer";
import "../styles/containers/RightContainer.css";
import { BerryFieldContainer } from "./BerryFieldContainer";
import { BusyPokemonComponent } from "../components/BusyPokemonComponent";

export const RightContainer = () => {

    let rightContainerToReturn;
    const appState = useSelector((state)=>state.player.appState);

    switch(appState) {
        case "combat": rightContainerToReturn = <RegionContainer />;
        break;
        case "farm": rightContainerToReturn = <BerryFieldContainer />;
        break;
        case "main": rightContainerToReturn = <BusyPokemonComponent />;
        break;
        default: rightContainerToReturn = "Error has occurred during the switch of the right container";
    }

    return(
        <div id="rightContainer">
            {rightContainerToReturn}
        </div>
    )
}