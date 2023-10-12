function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {

    const previousClick = () => {
        setPokemonIndex(pokemonIndex - 1)
    }

    const nextClick = () => {
        setPokemonIndex(pokemonIndex + 1)
    }
    return (
        <>
            <button onClick={previousClick} disabled={pokemonIndex === 0}>Previous</button>
            <button onClick={nextClick} disabled={pokemonIndex === pokemonList.length - 1}>Next</button>
        </>

    );
}

export default NavBar;