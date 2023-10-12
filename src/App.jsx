import { useState } from 'react';
import './App.css';

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const previousClick = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const nextClick = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={previousClick} disabled={pokemonIndex === 0}>Previous</button>
      <button onClick={nextClick} disabled={pokemonIndex === pokemonList.length - 1}>Next</button>
    </>
  );
}


export default App;