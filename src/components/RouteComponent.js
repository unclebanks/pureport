import React from "react";
import ROUTES from "../data/Routes";
import { useDispatch, useSelector } from "react-redux";
import "../styles/RouteComponent.css";
import { changeRoute } from "../slices/PlayerSlice";

export const RouteComponent = () => {

    let dispatch = useDispatch();
    const regionID = useSelector((state)=> state.player.location.region)
    let loadRoutes = () => {
        let routeButtons = [];
        ROUTES[regionID].forEach(route => {
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