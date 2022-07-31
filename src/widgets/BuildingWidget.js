import React from "react";
import "../styles/widgets/BuildingWidget.css";

export const BuildingWidget = (props) => {

    return(
        <div id="buildingWidget">
            <span>{props.buildingData.name}</span>
        </div>
    )
}