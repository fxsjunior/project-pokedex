import { Button } from "./styles";

const ButtonNext = ({ addPokemons }) => {
    return (
    
            <Button type="submit" onClick={addPokemons} >
                Load more
            </Button>
        
    );
}

export default ButtonNext;