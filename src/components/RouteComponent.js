import React from "react";
import ROUTES from "../data/Routes";
import { Utils } from "../modules/Utils";
import "../styles/RouteComponent.css";

export const RouteComponent = (props) => {

    let routeArray = Utils.objectToArray(ROUTES[props.player.settings.currentRegionId]);
    console.log(props.player.settings.currentRegionId);
    console.log(ROUTES[props.player.settings.currentRegionId]);
    let loadRoutes = () => {
        let routeButtons = [];
        routeArray.forEach(route => {
            routeButtons.push(<div><button style={{"fontStyle": "italic"}} onClick={()=>{alert(route.name)}}>{route.name}</button></div>);
        })
        return <ul>{routeButtons}</ul>;
    }
    return(
        <div id="routeComponent"style={{"overflow": "auto", "maxHeight": "90vh"}}>
            {loadRoutes()}
        </div>
    )
}