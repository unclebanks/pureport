import React from 'react';
import { RegionContainer } from './containers/RegionContainer';
import './App.css';
import { PokeballComponent } from './components/PokeballComponent';
import { Utils } from './modules/Utils';
import { CurrencyComponent } from './components/CurrencyComponent';

function App() {

  let player = localStorage.getItem("purePort")? Utils.loadPlayer(JSON.parse(localStorage.getItem("purePort"))): "";

  if(player === "") {
    Utils.createSave();
  }
  return (
    <div className="App">
    <RegionContainer player={player}/>
    <PokeballComponent player={player}/>
    <CurrencyComponent player={player}/>
    {/* <PlayerBox />
    <NavBox />
    <PartyBox />
    <PokeBallBox /> */}
    </div>
  );
}

export default App;
