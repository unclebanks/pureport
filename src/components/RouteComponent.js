import React from "react";
import ROUTES from "../data/Routes";
import { useDispatch } from "react-redux";
import "../styles/RouteComponent.css";
import { changeRoute } from "../slices/PlayerSlice";

export const RouteComponent = (props) => {

    let dispatch = useDispatch();
    let loadRoutes = () => {
        let routeButtons = [];
        ROUTES[props.player.settings.currentRegionId].forEach(route => {
            routeButtons.push(<div key={route.name+1}><button style={{"fontStyle": "italic"}} onClick={()=>{dispatch(changeRoute({"route": route.name}))}}>{route.name}</button></div>);
        })
        return <ul>{routeButtons}</ul>;
    }
    return(
        <div id="routeComponent"style={{"overflow": "auto", "maxHeight": "90vh"}}>
            {loadRoutes()}
        </div>
    )
}