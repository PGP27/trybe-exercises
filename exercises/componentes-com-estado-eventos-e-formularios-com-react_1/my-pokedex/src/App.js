import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.fire = this.fire.bind(this);
    this.psychic = this.psychic.bind(this);
    this.state = {
      type: 'Fire',
    }
  }
  fire(event) {
    this.setState(() => ({
      type: 'Fire',
    }));
    const a = document.getElementById('psychic');
    a.style.borderColor = 'rgb(133, 133, 133)';
    event.target.style.borderColor = 'red';
  }
  psychic(event) {
    this.setState(() => ({
      type: 'Psychic',
    }));
    const a = document.getElementById('fire');
    a.style.borderColor = 'rgb(133, 133, 133)';
    event.target.style.borderColor = 'red';
  }
  render() {
    return (
      <div>
        <h1>Pokedéx</h1>
        <Pokedex pokes = {pokemons.filter((pokemon) => pokemon.type === this.state.type)} />
        <button style={{borderColor: 'red'}} id="fire" onClick={this.fire}>Fire</button>
        <button style={{borderColor: 'rgb(133, 133, 133)'}} id="psychic" onClick={this.psychic}>Psychic</button>
      </div>
    );
  }
}

export default App;
