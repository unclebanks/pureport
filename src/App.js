import React from 'react';
import { RegionContainer } from './containers/RegionContainer';
import './App.css';

function App() {
  return (
    <div className="App">
    <RegionContainer />
    <PlayerBox />
    <NavBox />
    <PartyBox />
    <PokeBallBox />
    </div>
  );
}

export default App;
