
export const getPokemons = async (limit, offset) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const pokemons = await response.json()
    const results = pokemons.results
    return results
}

export const getPokeAbility = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

export const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json()
    return pokemon
};

