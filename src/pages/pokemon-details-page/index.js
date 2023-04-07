import { useContext, useEffect, useState } from "react";

import { TiArrowBackOutline } from 'react-icons/ti'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../Context/theme";
import { getPokeAbility, getPokemon } from "../../services/api";

import { DivCard, DivImg, DivContent, DivPokemon, DivInfo, DivMoves, Name, Div, PokemonDiv, ImgPokemon } from "./styles";
import Switcher from "../../components/theme-switch";

const InfoPokemons = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const [pokemonAbility, setPokemonAbility] = useState([])
    const [pokemonInfo, setPokemonInfo] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await getPokemon(id)
            console.log(pokemonData)
            const pokemonAbility = pokemonData.abilities.map(
                (ability) => ability.ability.url
            )

            let pokemonAbilityMoves = pokemonAbility.map(async (url) => {
                return await getPokeAbility(url)
            })

            pokemonAbilityMoves = await Promise.all(pokemonAbilityMoves)
            setPokemonAbility(pokemonAbilityMoves)

            setPokemonInfo({
                name: pokemonData.name,
                image: pokemonData["sprites"]["versions"]["generation-v"][
                    "black-white"
                ]["animated"]["front_default"],
                moves: pokemonData.moves.slice(0, 10),
                types: pokemonData.types,
                abilities: pokemonData.abilities,
            })
        }
        fetchData()

    }, [])

    return (
        <DivCard theme={theme}>
            <DivImg>
                <DivContent>
                    <Link to="/">
                        <TiArrowBackOutline size={32} />
                    </Link>
                    <Switcher />
                </DivContent>
                <DivPokemon>
                    <Div>
                        <Name>{pokemonInfo.name}</Name>
                        {Object.keys(pokemonInfo).length > 0 && (
                            <ul>
                                {pokemonInfo.types.map((type, index) => (
                                    <li key={index}>
                                        <Name>
                                            {type.type.name}
                                        </Name>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Div>
                    <PokemonDiv>
                        <ImgPokemon src={pokemonInfo.image} />
                    </PokemonDiv>
                    <DivMoves>
                        <h4>moves</h4>
                        <h4>abilities</h4>
                    </DivMoves>
                    <DivInfo>

                        {Object.keys(pokemonInfo).length > 0 && (
                            <ul>
                                {pokemonInfo.moves.map((moves, index) => (
                                    <li key={index}>
                                        {moves.move.name}
                                    </li>
                                ))}
                            </ul>
                        )}


                        {Object.keys(pokemonAbility).length > 0 && (
                            <ul className="ability">
                                {pokemonAbility.map((ability, index) => (
                                    <li key={index}>
                                        <b>
                                            {ability.name}
                                        </b>
                                        <p >
                                            {ability.effect_entries[0].effect}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}

                    </DivInfo>
                </DivPokemon>
            </DivImg>
        </DivCard>
    );
}

export default InfoPokemons;