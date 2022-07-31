import React, { useState } from 'react';
import { RegionContainer } from './containers/RegionContainer';
import './App.css';
import { PokeballComponent } from './components/PokeballComponent';
import { Utils } from './modules/Utils';
import { CurrencyComponent } from './components/CurrencyComponent';
import { PartyContainer } from './containers/PartyContainer';
import { ActiveWindowContainer } from './containers/ActiveWindowContainer';
import { ToolbarComponent } from './components/ToolbarComponent';

function App() {

  let player = localStorage.getItem("purePort")? Utils.loadPlayer(JSON.parse(localStorage.getItem("purePort"))): "";

  const [currentAppState, changeCurrentAppState] = useState("adventure");

  let appStateToRender;

  const adventureState = 
    <div id='adventureState'>
      <PartyContainer player={player}/>
      <RegionContainer player={player}/>
      <PokeballComponent player={player}/>
      <CurrencyComponent player={player}/>
      <ActiveWindowContainer player={player}/>
      <ToolbarComponent />
    {/* <PlayerBox />
    <NavBox /> */}
    </div>

  switch(currentAppState) {
    case "adventure": appStateToRender = adventureState;
    break;
    default: appStateToRender = "Please contact the devs. Something fundamental has gone wrong.";
  }

  if(player === "") {
    Utils.createSave();
  }
  return (
    <div className='App'>
      {appStateToRender}
    </div>
  );
}

export default App;
