import React from "react";
import { useSelector } from "react-redux/es/exports";
import "../styles/containers/BerryFieldContainer.css";

export const BerryFieldContainer = () => {

    const berryFields = useSelector((state) => state.player.berryFields);

    return(
        <div id="berryFieldContainer">
            <div>Fields go here</div>
            <div style={{"display": "grid", "gridTemplateColumns": "50% 50%"}}>
                <button>PREV</button>
                <button>NEXT</button>
            </div>
        </div>
    )
}