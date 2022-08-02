import React from "react";
import { useSelector } from "react-redux";

export const CombatContainer = () => {

    let currentCombatRoute = useSelector((state)=>state.player.location.currentRouteId);
    let currentCombatRegion = useSelector((state)=>state.player.location.currentRegionId);

    console.log(currentCombatRoute);
    console.log(currentCombatRegion);

    return(
        <div id="combatContainer">
            <span>{currentCombatRoute}</span>
        </div>
    )
}