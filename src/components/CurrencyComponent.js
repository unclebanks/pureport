import React from "react";
import { ImageImports } from "../data/ImageImports";
import "../styles/CurrencyComponent.css";

export const CurrencyComponent = (props) => {

    return(
        <div id="currencyComponent">
            <div>Currency:</div>
            <div>
                <div><img className="currencyIcon" src={ImageImports.Currency.PokeCoins} alt="Poke Coins"/> PokeCoins: {props.player.currencyAmount.pokecoins}</div>
            </div>
            <div>
                <div><img className="currencyIcon" src={ImageImports.Currency.BattleCoins} alt="Battle Coins"/> BattleCoins: {props.player.currencyAmount.battlecoins}</div>
            </div>
            <div>
                <div><img className="currencyIcon" src={ImageImports.Currency.CatchCoins} alt="Catch Coins"/> CatchCoins: {props.player.currencyAmount.catchcoins}</div>
            </div>
            <div>
                <div><img className="currencyIcon" src={ImageImports.Currency.GameTokens} alt="Game Tokens"/> Game Tokens: {props.player.currencyAmount.gametokens}</div>
            </div>
        </div>
    )
}