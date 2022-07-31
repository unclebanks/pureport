import React from "react";
import "../styles/widgets/HouseWidget.css";

export const HouseWidget = (props) => {

    return(
        <div id="houseWidget">
            <span>{props.houseData.name}</span>
            <div id="houseWidgetButtons">
                <div>{props.houseData.npc? props.houseData.npc.length: ""}</div>
                <div>{props.houseData.npc? props.houseData.npc.length: ""}</div>
                <div>{props.houseData.npc? props.houseData.npc.length: ""}</div>
                <div>{props.houseData.npc? props.houseData.npc.length: ""}</div>
            </div>
        </div>
    )
}