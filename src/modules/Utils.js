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
        tempPlayer.addPoke(new Pokemon(this.getPokemonDataByName("Squirtle")));
        tempPlayer.addPoke(new Pokemon(this.getPokemonDataByName("Charmander")));
        tempPlayer.addPoke(new Pokemon(this.getPokemonDataByName("Bulbasaur")));
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
    getPokemonDataByName(name) {
        let i = 0;
        while(i < POKEDEX.length) {
            if(POKEDEX[i].name === name) {
                return POKEDEX[i];
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
    },
    getGymData(buildingData) {
        let i = 0;
        while(i < buildingData.length) {
            if(buildingData[i].type === "gym") {
                return buildingData[i];
            } else {
                i++;
            }
        }
    },
    cloneJsonObject(object) {
        return JSON.parse(JSON.stringify(object));
    },
    createArrayOfPokemonObjectFromRouteData(route) {
        let i = 0;
        let pokemonObjectArray = [];
        let routePokemonArray = route.pokes;
        let level = route.minLevel + Math.round((Math.random() * (route.maxLevel - route.minLevel)));
        console.log(route)
        while(i < routePokemonArray.length) {
            let tempPoke = routePokemonArray[i];
            pokemonObjectArray.push(new Pokemon(this.getPokemonDataByName(tempPoke), level));
            i++;
        }
        return pokemonObjectArray;
    },
    RNG(chance) {
        const rnd = Math.random() * 100;
        return (rnd < chance);
    }
}