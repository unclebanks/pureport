import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/RouteContainer.css";
import { CombatContainer } from "./CombatContainer";

export const RouteContainer = (props) => {

    const routeInformation = useSelector((state) => state.player.location);

    let routeContainerToReturn;
    
    const [routeContainerState, setRouteContainerState] = useState("main");

    const routeContainerMainState = 
        <div id="routeContainerMainState">
            <span>{routeInformation.route}</span>
            <div id="routeSubContainer">
                <span>NPC stuff</span>
                <button onClick={() => {setRouteContainerState("battle")}}>Combat Area</button>
            </div>
        </div>

    switch(routeContainerState) {
        case "main": routeContainerToReturn = routeContainerMainState;
        break;
        case "battle": routeContainerToReturn = <CombatContainer />;
        break;
        default: routeContainerToReturn = "Error, please contact the devs";
    }

    return(
        <div id="routeContainer">
            {routeContainerToReturn}
        </div>
    )
}