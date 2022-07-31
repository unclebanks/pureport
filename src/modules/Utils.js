import { Player } from "../classes/Player"
import { Pokemon } from "../classes/Pokemon";
import { POKEDEX } from "../data/Database";
import ROUTES from "../data/Routes";

export const Utils = {


    playerFile() {
        if(!localStorage.getItem("purePort")) {
            this.createSave()
        } else { return this.loadPlayer(""); }
    },
    createSave() {
        let tempPlayer = new Player();
        tempPlayer.addPoke(new Pokemon("Squirtle"));
        tempPlayer.addPoke(new Pokemon("Charmander"));
        tempPlayer.addPoke(new Pokemon("Bulbasaur"));
        localStorage.setItem("purePort", JSON.stringify(tempPlayer));
        window.location.reload();
    },
    loadPlayer(sF) {
        if(sF === "") {
            sF = JSON.parse(localStorage.getItem("purePort"));
        }
        let tempPlayer = new Player();
        tempPlayer.loadSave(sF);
        return tempPlayer;
    },
    objectToArray(obj) {
        let returnArray = Object.keys(obj).map(key => { return obj[key] });
        return returnArray;
    },
    arrayToObject(arr) {
        let emptyObject = {}
        let returnObject = Object.assign(emptyObject, arr);
        return returnObject;
    },
    getPokeIdByName(name) {
        let i = 0;
        while(i < POKEDEX.length) {
            if(POKEDEX[i].name === name) {
                return i;
            } else { i++; }
        }
    },
    getRouteIndexByName(region,routeName) {
        let i = 0;
        while(i < ROUTES[region].length) {
            if(ROUTES[region][i].name === routeName) {
                return i;
            } else { i++; }
        }
    }
}