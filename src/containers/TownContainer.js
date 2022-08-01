import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GymComponent } from "../components/GymComponent";
import ROUTES from "../data/Routes";
import { Utils } from "../modules/Utils";
import "../styles/TownContainer.css";

export const TownContainer = () => {

    const townLocation = useSelector((state)=> state.player.location);
    const townData = ROUTES[townLocation.region][Utils.getRouteIndexByName(townLocation.region, townLocation.route)];
    const [currentTownComponent, changeCurrentTownComponent] = useState("main");
    let townPageToReturn;
    const populateTownPage = (type) => {
        let i = 0;
        let iteratedArray = [];
        while(i < townData[type].length) {
            if(townData[type][i].type === "gym") {   
                iteratedArray.push(<button key={townData[type][i].name} onClick={()=>{changeCurrentTownComponent("gym")}}>{townData[type][i].name}</button>)
            } else {
                iteratedArray.push(<button key={townData[type][i].name}>{townData[type][i].name}</button>)
            }
            i++;
        }
        return iteratedArray;
    }
    switch(currentTownComponent) {
        case "main": townPageToReturn = "";
        break;
        case "gym": townPageToReturn = <GymComponent gymData={Utils.getGymData(townData.buildings)}/>;
        break;
        default: break;
    }

    return(
        <div id="townContainer">
            <div id="townBuildingsContainer" style={{"outline": "1px solid black"}}>
                {townData.buildings? populateTownPage("buildings"): ""}
            </div>
            <div id="townFocusContainer" style={{"outline": "1px solid slategray"}}>
                {townPageToReturn}
            </div>
        </div>
    )
}