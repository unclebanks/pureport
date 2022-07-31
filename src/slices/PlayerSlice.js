import { createSlice } from "@reduxjs/toolkit";
import { Utils } from "../modules/Utils";

let player = Utils.playerFile();

export const currencySlice = createSlice(
    {
        name: "player",
        initialState: {
            pokecoins: player.currencyAmount.pokecoins,
            catchcoins: player.currencyAmount.catchcoins,
            battlecoins: player.currencyAmount.battlecoins,
            gametokens: player.currencyAmount.gametokens,
            region: player.settings.currentRegionId,
            route: player.settings.currentRouteId
        },
        reducers: {
            addCoins: (state, action) => {
                state[action.payload.type] += action.payload.value;
            },
            changeRoute: (state, action) => {
                state.route = action.payload.route;
            },
            changeRegion: (state, action) => {
                state.region = action.payload.region;
                state.route = action.payload.route;
            }
        }
    }
)

export const {addCoins, changeRoute, changeRegion} = currencySlice.actions;

export default currencySlice.reducer;