import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { changeAppState } from "../slices/PlayerSlice.js";
import "../styles/ToolbarComponent.css";

export const ToolbarComponent = () => {

    let toolbarType;
    const appState = useSelector((state)=>state.player.appState);
    const dispatch = useDispatch()

    const mainState = 
        <div id="mainToolbar" style={{"backgroundColor": "gray"}}>
            <span></span>
            <button>COMBAT</button>
            <span></span>
            <button onClick={()=> {dispatch(changeAppState({appState: "farm"}))}}>FARM</button>
            <span></span>
            <button>LOCKED</button>
            <span></span>
            <button>LOCKED</button>
        </div>

    const farmState =
        <div id="farmToolbar">
            <span></span>
            <button onClick={()=> {dispatch(changeAppState({appState: "main"}))}}>MAIN</button>
            <span></span>
            <button onClick={()=> {dispatch(changeAppState({appState: "combat"}))}}>COMBAT</button>
            <span></span>
            <button>LOCKED</button>
            <span></span>
            <button>LOCKED</button>
        </div>

    switch(appState) {
        case "main": toolbarType = mainState;
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