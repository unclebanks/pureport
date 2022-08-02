import React from "react";
import { RouteComponent } from "../components/RouteComponent";
import { useDispatch } from "react-redux/es/exports";
import "../styles/RegionContainer.css";
import { changeRegion } from "../slices/PlayerSlice";

export const RegionContainer = (props) => {

    const dispatch = useDispatch();
    const triggerChangeRegion = (region) => {
        let route;
        switch(region) {
            case "Kanto": route = "Pallet Town";
            break;
            case "Johto": route = "New Bark Town";
            break;
            default: window.location.reload();
        }
        dispatch(changeRegion({"region": region, "route": route}));
    }

    return(
        <div id="regionContainer">
            <select onChange={(e)=>{triggerChangeRegion(e.target.value)}}>
                <option value={"Kanto"}>Kanto</option>
                <option value={"Johto"}>Johto</option>
            </select>
            <RouteComponent player={props.player}/>
        </div>
    )
}