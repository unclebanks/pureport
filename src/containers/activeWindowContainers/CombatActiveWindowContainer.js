import React from "react";
import { useSelector } from "react-redux/es/exports";
import ROUTES from "../../data/Routes";
import { Utils } from "../../modules/Utils";
import { TownContainer } from "../TownContainer";
import { RouteContainer } from "../RouteContainer";
import "../../styles/containers/CombatActiveWindowContainer.css";

export const CombatActiveWindowContainer = () => {

    let combatActiveWindowToReturn;
    const currentLocation = useSelector((state)=> state.player.location);
    switch(ROUTES[currentLocation.region][Utils.getRouteIndexByName(currentLocation.region, currentLocation.route)].type) {
        case "town": combatActiveWindowToReturn = <TownContainer />;
        break;
        case "route": combatActiveWindowToReturn= <RouteContainer />;
        break;
        default: combatActiveWindowToReturn = "Error, please reload the page and inform the devs that this page does not have a specific error screen.";
    }

    return(
        <div id="combatActiveWindowContainer">
            {combatActiveWindowToReturn}
        </div>
    )
}