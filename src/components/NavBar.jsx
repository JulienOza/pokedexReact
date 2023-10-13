function NavBar({ pokemonIndex, setPokemonIndex, pokemonList, pokemonSelect, setPokemonSelect }) {

    return (
        pokemonList.map((poke, index) => (
            <button key={poke.name} onClick={() => { setPokemonSelect(index) }}>{poke.name}</button>))
    )
}

export default NavBar;