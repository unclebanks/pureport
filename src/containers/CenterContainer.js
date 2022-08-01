import React from "react";
import { useSelector } from "react-redux";
import "../styles/containers/CenterContainer.css";

export const CenterContainer = () => {

    
    const appState = useSelector((state)=>state.player.appState);

    return(
        <div id="centerContainer">
            Center
        </div>
    )
}