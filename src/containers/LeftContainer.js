import React from "react";
import { useSelector } from "react-redux";
import { PartyContainer } from "./PartyContainer";
import "../styles/containers/LeftContainer.css";
import { FarmWorkerContainer } from "./FarmWorkerContainer";

export const LeftContainer = () => {

    let leftContainerToReturn;
    const appState = useSelector((state)=>state.player.appState);

    switch(appState) {
        case "main": leftContainerToReturn = <PartyContainer />;
        break;
        case "farm": leftContainerToReturn = <FarmWorkerContainer />;
        break;
        default: leftContainerToReturn = "The left container has failed to match the switch case checking props.appState. Please inform the dev";
    }
    return(
        <div id="leftContainer">
            {leftContainerToReturn}
        </div>
    )
}