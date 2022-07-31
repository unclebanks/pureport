import React from "react";
import { RouteComponent } from "../components/RouteComponent";
import "../styles/RegionContainer.css";

export const RegionContainer = (props) => {

    return(
        <div id="regionContainer">
            <select>
                <option>Kanto</option>
                <option>Johto</option>
            </select>
            <RouteComponent player={props.player}/>
        </div>
    )
}