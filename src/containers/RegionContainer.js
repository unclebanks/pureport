import React from "react";
import { RouteComponent } from "../components/RouteComponent";
import { useDispatch } from "react-redux/es/exports";
import "../styles/RegionContainer.css";
import { changeRegion } from "../slices/PlayerSlice";

export const RegionContainer = (props) => {

    const dispatch = useDispatch();

    return(
        <div id="regionContainer">
            <select onChange={(e)=>{dispatch( changeRegion({"region": e.target.value}))}}>
                <option value={"Kanto"}>Kanto</option>
                <option value={"Johto"}>Johto</option>
            </select>
            <RouteComponent player={props.player}/>
        </div>
    )
}