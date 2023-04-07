import styled from "styled-components";


export const ProjectPokemon = styled.div`
    background: url(${(props) => props.theme.backgroundImage}) top/cover no-repeat
    fixed;
    min-height: 100vh;
    text-align: center;

`

export const Header = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }

`

export const Div = styled.div`
    display: flex;
    align-items: center;
`

export const Img = styled.img`
    width: 10%;
    min-width: 200px;
    max-width: 33%;
    border-radius: 50%;
    
    @media screen and (max-width: 768px) {
        display: none;
        
    }
    
`

export const Title = styled.h1`
    font-family: 'Pokemon Solid', sans-serif;
    font-size: 3rem;
    letter-spacing: 5px;
    color: wheat;
    padding-left: 1rem;
`
export const ListPokemon = styled.section`
    display: flex;
    justify-content: center;
`

export const DivPokemon = styled.div`
  min-width: 60vw;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-items: center;
  padding: 20px;

`
