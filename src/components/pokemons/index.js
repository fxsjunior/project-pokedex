
import { Link } from "react-router-dom";
import { ContainerDiv, Img, ContainerPoke, Container, Name } from "./styles";

const Pokemons = ({ pokemons, pokemonId }) => {


    return (
        <Link to={`/info-pokemons/${pokemonId}`}>
            <ContainerDiv>
                <ContainerPoke>
                    <Name>{pokemons.name}</Name>
                    <Container>
                        <Img src={pokemons["sprites"]["versions"]["generation-v"][
                            "black-white"
                        ]["animated"]["front_default"]} />
                    </Container>
                </ContainerPoke>
            </ContainerDiv>
        </Link>
    );
}

export default Pokemons;