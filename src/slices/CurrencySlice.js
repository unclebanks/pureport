import { createSlice } from "@reduxjs/toolkit";
import { Utils } from "../modules/Utils";

let player = Utils.loadPlayer("");

export const currencySlice = createSlice(
    {
        name: "currency",
        initialState: {
            pokecoins: player.currencyAmount.pokecoins,
            catchcoins: player.currencyAmount.catchcoins,
            battlecoins: player.currencyAmount.battlecoins,
            gametokens: player.currencyAmount.gametokens
        },
        reducers: {
            addCoins: (state, action) => {
                state[action.payload.type] += action.payload.value;
            }
        }
    }
)

export const {addCoins} = currencySlice.actions;

export default currencySlice.reducer;