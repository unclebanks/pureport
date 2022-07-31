import React from 'react';
import { RegionContainer } from './containers/RegionContainer';
import './App.css';
import { PokeballComponent } from './components/PokeballComponent';
import { Utils } from './modules/Utils';
import { CurrencyComponent } from './components/CurrencyComponent';
import { PartyContainer } from './containers/PartyContainer';
import { ActiveWindowContainer } from './containers/ActiveWindowContainer';

function App() {

  let player = localStorage.getItem("purePort")? Utils.loadPlayer(JSON.parse(localStorage.getItem("purePort"))): "";

  if(player === "") {
    Utils.createSave();
  }
  return (
    <div className="App">
      <PartyContainer player={player}/>
      <RegionContainer player={player}/>
      <PokeballComponent player={player}/>
      <CurrencyComponent player={player}/>
      <ActiveWindowContainer player={player}/>
    {/* <PlayerBox />
    <NavBox /> */}
    </div>
  );
}

export default App;
