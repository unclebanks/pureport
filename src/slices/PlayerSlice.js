import { createSlice } from "@reduxjs/toolkit";
import { Utils } from "../modules/Utils";

let player = Utils.playerFile();

export const currencySlice = createSlice(
    {
        name: "player",
        initialState: {
            pokedexHighestID: player.pokedexHighestID,
            activePokeID: player.activePokeID,
            lastHeal: player.lastHeal,
            pokemon: player.pokemon,
            pcPokemon: player.pcPokemon,
            berryFields: player.berryFields,
            currentBoostedRoamer: {
                region: player.currentBoostedRoamer.region,
                route: player.currentBoostedRoamer.route,
                pokemon: player.currentBoostedRoamer.pokemon,
                start: player.currentBoostedRoamer.start,
                length: player.currentBoostedRoamer.length,
                expired: player.currentBoostedRoamer.expired,
            },
            selectedBall: player.selectedBall,
            ballsAmount: {
                pokeball: player.ballsAmount.pokeball,
                greatball: player.ballsAmount.greatball,
                ultraball: player.ballsAmount.ultraball,
                masterball: player.ballsAmount.masterball,
            },
            unlocked: player.unlocked,
            secretCodes: player.secretCodes,
            evoStones: player.evoStones,
            badges: player.badges,
            wins: player.wins,
            events: player.events,
            currency: {
                pokecoins: player.currencyAmount.pokecoins,
                catchcoins: player.currencyAmount.catchcoins,
                battlecoins: player.currencyAmount.battlecoins,
                gametokens: player.currencyAmount.gametokens,
            },
            location: {
                region: player.settings.currentRegionId,
                route: player.settings.currentRouteId
            },
            appState: "main"
        },
        reducers: {
            addCoins: (state, action) => {
                state.currency[action.payload.type] += action.payload.value;
            },
            changeRoute: (state, action) => {
                state.location.route = action.payload.route;
            },
            changeRegion: (state, action) => {
                state.location.region = action.payload.region;
                switch(action.payload.region) {
                    case "Kanto": state.location.route = "Pallet Town";
                    break;
                    case "Johto": state.location.route = "New Bark Town";
                    break;
                    default: window.location.reload();
                }
            },
            changeAppState: (state, action) => {
                if(state.appState !== action.payload.appState) {
                    state.appState = action.payload.appState;
                }
            },
            setActive(state, action) {
                state.activePokeID = action.payload.newID;
            }
        }
    }
)

export const {addCoins, changeRoute, changeRegion, changeAppState, setActive} = currencySlice.actions;

export default currencySlice.reducer;