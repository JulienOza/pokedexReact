import { useState } from 'react';
import './App.css';

import PokemonCard from "./components/PokemonCard";
import NavBar from './components/Navbar';

const pokemonList = [
  {
    name: "Ronflex",
    imgSrc: "https://www.pokepedia.fr/images/archive/2/2b/20160822012737%21Ronflex-RFVF.png"
  },
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];


function App() {
  const [pokemonSelect, setPokemonSelect] = useState(0);

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonSelect]} />
      <NavBar pokemonList={pokemonList} pokemonSelect={pokemonSelect} setPokemonSelect={setPokemonSelect} />
    </>
  );
}

export default App;