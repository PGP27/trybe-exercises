import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className = 'pokedex'>
        {this.props.pokes.map((poke) => <Pokemon key = {poke.id} pokemon = {poke}/>)}
      </div>
    );
  }
}

export default Pokedex;
