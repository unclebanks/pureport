import React from "react";
import ROUTES from "../data/Routes";
import { TownContainer } from "../containers/TownContainer";
import "../styles/ActiveWindowContainer.css";
import { RouteContainer } from "./RouteContainer";

export const ActiveWindowContainer = (props) => {

    let activeWindowToReturn;

    switch(ROUTES[props.player.settings.currentRegionId][props.player.settings.currentRouteId].type) {
        case "town": activeWindowToReturn = <TownContainer />;
        break;
        case "route": activeWindowToReturn= <RouteContainer />;
        break;
        default: activeWindowToReturn = "Error, please reload the page and inform the devs that this page does not have a specific error screen.";
    }

    return(
        <div id="activeWindowContainer">
            {activeWindowToReturn}
        </div>
    )
}