import React from 'react';
import './App.css';
import { Utils } from './modules/Utils';
import { ToolbarComponent } from './components/ToolbarComponent';
import { LeftContainer } from './containers/mainContainers/LeftContainer';
import { RightContainer } from './containers/mainContainers/RightContainer';
import { CenterContainer } from './containers/mainContainers/CenterContainer';

function App() {

  let player = localStorage.getItem("purePort")? Utils.loadPlayer(JSON.parse(localStorage.getItem("purePort"))): "";

  if(player === "") {
    Utils.createSave();
  }
  return (
    <div className='App'>
      <LeftContainer />
      <CenterContainer />
      <RightContainer />
      <ToolbarComponent />
    </div>
  );
}

export default App;
