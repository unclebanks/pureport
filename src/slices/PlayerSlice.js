import { createSlice } from "@reduxjs/toolkit";
import { Utils } from "../modules/Utils";

let player = Utils.playerFile();

export const currencySlice = createSlice(
    {
        name: "player",
        initialState: {
            currency: {
                pokecoins: player.currencyAmount.pokecoins,
                catchcoins: player.currencyAmount.catchcoins,
                battlecoins: player.currencyAmount.battlecoins,
                gametokens: player.currencyAmount.gametokens,
            },
            location: {
                region: player.settings.currentRegionId,
                route: player.settings.currentRouteId
            }
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
                state.location.route = action.payload.route;
            }
        }
    }
)

export const {addCoins, changeRoute, changeRegion} = currencySlice.actions;

export default currencySlice.reducer;