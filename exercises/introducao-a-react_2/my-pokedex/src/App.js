import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedéx</h1>
        <Pokedex pokes = {pokemons} />
      </div>
    );
  }
}

export default App;
