import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      pokemonAtual: 0,
    }
  }
  next(length) {
    if(this.state.pokemonAtual === length - 1) {
      this.setState(() => ({
        pokemonAtual: 0,
      }));
    } else {
      this.setState((pokemon) => ({
        pokemonAtual: pokemon.pokemonAtual + 1,
      }));
    }
  }
  prev(length) {
    if(this.state.pokemonAtual === 0) {
      this.setState(() => ({
        pokemonAtual: length - 1,
      }));
    } else {
      this.setState((pokemon) => ({
        pokemonAtual: pokemon.pokemonAtual - 1,
      }));
    }
  }
  render() {
    return (
      <div className = 'pokedex'>
        <button onClick={() => this.prev(this.props.pokes.length)}>Prev</button>
        <Pokemon key = {this.props.pokes[this.state.pokemonAtual].id} pokemon = {this.props.pokes[this.state.pokemonAtual]} />
        <button onClick={() => this.next(this.props.pokes.length)}>Next</button>
      </div>
    );
  }
}

export default Pokedex;
