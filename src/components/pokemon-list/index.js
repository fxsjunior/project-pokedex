import { useEffect, useState } from "react";
import { getPokemon, getPokemons } from "../../services/api";
import Pokemons from "../pokemons";
import ButtonNext from "../pokeButton";
import { DivPokemon } from "../../pages/home/styles";


const PokeminsList = () => {
    const paginationLimit = 10;

    const [pokemons, setPokemons] = useState([])
    const [paginationOffset, setPaginationOffset] = useState(0)

    const addPokemons = () => {
        setPaginationOffset(paginationOffset + paginationLimit)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemons(paginationLimit)
            const pokemonsName = data.map(pokemon => pokemon.name)
            const pokemonsPromises = pokemonsName.map(async (pokemonName) => await getPokemon(pokemonName))
            const paginatedPokemons = await Promise.all(pokemonsPromises)

            setPokemons([...pokemons, ...paginatedPokemons])

        }
        fetchData()
    }, [paginationOffset])

    return (
        <>
            <DivPokemon >
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <Pokemons key={index} pokemons={pokemon} pokemonId={pokemon.id} />
                        )
                    })
                }
                <ButtonNext addPokemons={addPokemons} />
            </DivPokemon>

        </>
    );
}

export default PokeminsList;