import React from "react";
import { useSelector } from "react-redux";
import ROUTES from "../data/Routes";
import { Utils } from "../modules/Utils";
import "../styles/TownContainer.css";
import { BuildingWidget } from "../widgets/BuildingWidget";
import { HouseWidget } from "../widgets/HouseWidget";
import { TownNPCWidget } from "../widgets/TownNPCWidget";
import { TownPCMartWidget } from "../widgets/TownPCMartWidget";

export const TownContainer = () => {

    const townLocation = useSelector((state)=> state.player.location);
    const townData = ROUTES[townLocation.region][Utils.getRouteIndexByName(townLocation.region, townLocation.route)];
    console.log(townData);
    const populateTownPage = (type) => {
        let arrayToReturn = [];
        let i = 0;
        switch(type) {
            case "houses":
                while(i < townData.houses.length) {
                    arrayToReturn.push(<HouseWidget houseData={townData.houses[i]}/>);
                    i++;
                }
            return arrayToReturn;
            case "buildings":
                while(i < townData.buildings.length) {
                    arrayToReturn.push(<BuildingWidget buildingData={townData.buildings[i]}/>);
                    i++;
                }
            return arrayToReturn;
            case "npc":
                while(i < townData.npc.length) {
                    arrayToReturn.push(<TownNPCWidget />);
                    i++;
                }
            return arrayToReturn;
            case "pcMart":
                while(i < townData.pcMart.length) {
                    arrayToReturn.push(<TownPCMartWidget pcMartData={townData.pcMart[i]}/>);
                    i++;
                }
            return arrayToReturn;
            default: console.log("Error somewhere");
        }
    }

    return(
        <div id="townContainer">
            <span id="townContainerSpan">Town Name: {townData.name}</span>
            <div id="townHouses" style={{"backgroundColor": "lightgreen"}}>
                <span>Houses</span>
                <div style={{"display": "grid", "gridTemplateRows": `repeat(${townData.houses? townData.houses.length: 1}, 1fr)`, "border": "1px solid black", "overflow": "auto"}}>{townData.houses? populateTownPage("houses"): ""}</div>
            </div>
            <div id="townBuildings" style={{"backgroundColor": "lightcoral"}}>
                <span>Buildings</span>
                <div>{townData.buildings? populateTownPage("buildings"): ""}</div>
            </div>
            <div id="townNPC" style={{"backgroundColor": "lightskyblue"}}>
                <span>NPCs</span>
                <div>{townData.npc? populateTownPage("npc"): ""}</div>
            </div>
            <div id="townPCMart" style={{"backgroundColor": "lightgray"}}>
                <span>PokeCenter/Mart</span>
                <div>{townData.pcMart? populateTownPage("pcMart"): ""}</div>
            </div>
        </div>
    )
}