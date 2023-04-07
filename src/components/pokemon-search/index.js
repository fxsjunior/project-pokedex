import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa"

import { Input, Button, Form } from "./styles";

const SearchPokemon = () => {

    const [inputvalue, setInpuValue] = useState('')

    const handleInput = (e) => {
        setInpuValue(e.target.value)
    }


    return (

        <Form action={`/info-pokemons/${inputvalue}`} >
            <Input type='text' id="input-search" placeholder="Name pokemon" onChange={handleInput}  />

            <Link to={`/info-pokemons/${inputvalue}`}>
                <Button type='button' id="btn-searcg" ><FaSistrix size={30} /></Button>
            </Link>
        </Form>
    );
}

export default SearchPokemon;



