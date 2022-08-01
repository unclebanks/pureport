import React from "react";
import { useSelector } from "react-redux";
import "../styles/RouteContainer.css";

export const RouteContainer = () => {

    const routeInformation = useSelector((state) => state.player.location);

    return(
        <div id="routeContainer">
            <span>{routeInformation.route}</span>
            <div id="routeSubContainer">
                <span>NPC stuff</span>
                <span>Combat Area</span>
            </div>
        </div>
    )
}