import React from "react";
import { RouteComponent } from "../components/RouteComponent";

export const RegionContainer = () => {

    return(
        <div id="regionContainer">
            <div id="regionButtons">
                <button>Kanto</button>
                <button>Johto</button>
                <button>Hoenn</button>
                <button>Sinnoh</button>
                <button>Unova</button>
                <button>Kalos</button>
            </div>
            <RouteComponent />
        </div>
    )
}