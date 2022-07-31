import React from "react";
import { ImageImports } from "../data/ImageImports";
import { useDispatch } from "react-redux";
import { addCoins } from "../slices/CurrencySlice";
import { useSelector } from "react-redux";
import "../styles/CurrencyComponent.css";

export const CurrencyComponent = (props) => {
    let dispatch = useDispatch();
    const currency = useSelector((state) => state.currency);
    console.log(currency);

    return(
        <div id="currencyComponent">
            <div>Currency:</div>
            <div>
                <div><img className="currencyIcon" src={ImageImports.Currency.PokeCoins} alt="Poke Coins"/> PokeCoins: {currency.pokecoins}</div>
            </div>
            <div>
                <div><img className="currencyIcon" src={ImageImports.Currency.BattleCoins} alt="Battle Coins"/> BattleCoins: {currency.battlecoins}</div>
            </div>
            <div>
                <div><img className="currencyIcon" src={ImageImports.Currency.CatchCoins} alt="Catch Coins"/> CatchCoins: {currency.catchcoins}</div>
            </div>
            <div>
                <div><img className="currencyIcon" src={ImageImports.Currency.GameTokens} alt="Game Tokens"/> Game Tokens: {currency.gametokens}</div>
            </div>
            <div>
                <button onClick={()=>{dispatch(addCoins({"type":"pokecoins", "value": 100}))}}>Add Pokecoins</button>
            </div>
        </div>
    )
}