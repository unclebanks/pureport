import React from "react";
import { useSelector } from "react-redux";

export const TownContainer = () => {

    const townInformation = useSelector((state)=> state.player.location);

    return(
        <div id="townContainer">
            <span>{townInformation.route}</span>
        </div>
    )
}