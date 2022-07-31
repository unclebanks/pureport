import React from "react";
import "../styles/ToolbarComponent.css";

export const ToolbarComponent = (props) => {

    let toolbarType;

    const adventureState = 
        <div id="adventureToolbar">
            <span></span>
            <button>ADVENTURE</button>
            <span></span>
            <button onClick={()=> {props.changeAppPage("farm")}}>FARM</button>
            <span></span>
            <button>COMBAT</button>
            <span></span>
            <button>LOCKED</button>
        </div>

    const farmState =
        <div id="farmToolbar">
            <button>FarmStuff</button>
        </div>

    switch(props.currentAppState) {
        case "adventure": toolbarType = adventureState;
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