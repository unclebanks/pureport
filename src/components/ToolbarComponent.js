import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { changeAppState } from "../slices/PlayerSlice.js";
import "../styles/ToolbarComponent.css";

export const ToolbarComponent = () => {

    let toolbarType;
    const appState = useSelector((state)=>state.player.appState);
    const dispatch = useDispatch()

    const adventureState = 
        <div id="adventureToolbar">
            <span></span>
            <button>ADVENTURE</button>
            <span></span>
            <button onClick={()=> {dispatch(changeAppState({appState: "farm"}))}}>FARM</button>
            <span></span>
            <button>LOCKED</button>
            <span></span>
            <button>LOCKED</button>
        </div>

    const farmState =
        <div id="farmToolbar">
            <button>FarmStuff</button>
        </div>

    switch(appState) {
        case "main": toolbarType = adventureState;
        break;
        case "farm": toolbarType = farmState;
        break;
        default: toolbarType = "Error, please contact the dev.";
    }

    return(
        <div id="toolbarComponent">
            {toolbarType}
        </div>
    )
}