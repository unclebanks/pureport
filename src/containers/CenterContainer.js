import React from "react";
import { useSelector } from "react-redux";
import "../styles/containers/CenterContainer.css";
import { CombatActiveWindowContainer } from "./CombatActiveWindowContainer";
import { FarmActiveWindowContainer } from "./FarmActiveWindowContainer";
import { MainActiveWindowContainer } from "./MainActiveWindowContainer";

export const CenterContainer = () => {

    
    const appState = useSelector((state)=>state.player.appState);

    let centerContainerToReturn;

    switch(appState) {
        case "main": centerContainerToReturn = <MainActiveWindowContainer />;
        break;
        case "farm": centerContainerToReturn = <FarmActiveWindowContainer />;
        break;
        case "combat": centerContainerToReturn = <CombatActiveWindowContainer />;
        break;
        default: centerContainerToReturn = "An error has occurred during the switch/case sequence for appState. Please contact the dev.";
    }

    return(
        <div id="centerContainer">
            {centerContainerToReturn}
        </div>
    )
}