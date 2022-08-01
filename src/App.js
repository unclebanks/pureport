import React from 'react';
import { RegionContainer } from './containers/RegionContainer';
import './App.css';
import { PokeballComponent } from './components/PokeballComponent';
import { Utils } from './modules/Utils';
import { CurrencyComponent } from './components/CurrencyComponent';
import { PartyContainer } from './containers/PartyContainer';
import { ActiveWindowContainer } from './containers/ActiveWindowContainer';
import { ToolbarComponent } from './components/ToolbarComponent';
import { LeftContainer } from './containers/LeftContainer';
import { RightContainer } from './containers/RightContainer';
import { CenterContainer } from './containers/CenterContainer';

function App() {

  let player = localStorage.getItem("purePort")? Utils.loadPlayer(JSON.parse(localStorage.getItem("purePort"))): "";


  // const adventureState = 
  //   <div id='adventureState'>
  //     <PartyContainer player={player}/>
  //     <RegionContainer player={player}/>
  //     <PokeballComponent player={player}/>
  //     <CurrencyComponent player={player}/>
  //     <ActiveWindowContainer player={player}/>
  //     <ToolbarComponent changeAppPage={setCurrentAppState} currentAppState={currentAppState} />
  //   {/* <PlayerBox />
  //   <NavBox /> */}
  //   </div>
  
  // const farmState = 
  //   <div id='combatState'>
  //     <ToolbarComponent changeAppPage={setCurrentAppState} currentAppState={currentAppState} />
  //   </div>

  // switch(currentAppState) {
  //   case "adventure": appStateToRender = adventureState;
  //   break;
  //   case "farm": appStateToRender = farmState;
  //   break;
  //   default: appStateToRender = "Please contact the devs. Something fundamental has gone wrong.";
  // }

  if(player === "") {
    Utils.createSave();
  }
  return (
    <div className='App'>
      <LeftContainer />
      <CenterContainer />
      <RightContainer />
      <ToolbarComponent />
      {/* {appStateToRender} */}
    </div>
  );
}

export default App;
