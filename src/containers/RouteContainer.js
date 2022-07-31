import React from "react";
import { useSelector } from "react-redux";

export const RouteContainer = () => {

    const routeInformation = useSelector((state) => state.player.location);

    return(
        <div id="routeContainer">
            <span>{routeInformation.route}</span>
        </div>
    )
}