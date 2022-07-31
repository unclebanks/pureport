import React from "react";
import ROUTES from "../data/Routes";
import { TownContainer } from "../containers/TownContainer";
import "../styles/ActiveWindowContainer.css";
import { RouteContainer } from "./RouteContainer";
import { Utils } from "../modules/Utils";
import { useSelector } from "react-redux";

export const ActiveWindowContainer = (props) => {

    let activeWindowToReturn;
    const currentLocation = useSelector((state)=> state.player);
    console.log(currentLocation);

    switch(ROUTES[currentLocation.region][Utils.getRouteIndexByName(currentLocation.region, currentLocation.route)].type) {
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