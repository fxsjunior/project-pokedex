import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import backgroundheader from '../../assets/poke-bola-black.png'

import { ProjectPokemon, Header, Div, Img, Title, ListPokemon } from "./styles";

import Switcher from "../../components/theme-switch";
import SearchPokemon from "../../components/pokemon-search";
import PokeminsList from "../../components/pokemon-list";

const Main = () => {  

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <ProjectPokemon theme={theme}>
            <Header>
                 <SearchPokemon  />
                <Div>
                    <Img src={backgroundheader} />
                    <Title>Pokémon</Title>
                </Div>
                <Switcher />
            </Header>
            <ListPokemon>
                    <PokeminsList />
            </ListPokemon>
        </ProjectPokemon>

    );
}

export default Main;