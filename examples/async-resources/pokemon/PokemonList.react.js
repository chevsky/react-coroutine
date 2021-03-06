import React from 'react';
import Coroutine from 'react-coroutine';
import Pokemons from './Pokemons';

async function PokemonList({ offset, limit }) {
  const pokemons = await Pokemons.retrieve(0, 10);

  return (
    <ul>
      {pokemons.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

export default Coroutine.create(PokemonList, () => ({ offset: 0, limit: 10 }));
