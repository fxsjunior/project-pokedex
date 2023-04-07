import styled from "styled-components";

import backgroundInfo from '../../assets/background-info.png'

export const DivCard = styled.div`
    background: url(${(props) => props.theme.backgroundImage}) no-repeat center/cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const DivImg = styled.div`
  width: 20em;
  height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 10px;

  ul{
    border: 1px solid black;
  }

  
`

export const DivContent = styled.div`
  background-color: transparent;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`

export const DivPokemon = styled.div`
  height: 90%;
  width: 90%;
  background: transparent;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: white;
`

export const Div = styled.div`
  color: #000000;
  display: flex;
  justify-content: space-between;
  padding: 2px 5px 0 5px;

  ul {
    border: none;
    display: flex;
    color: white;
    gap: 1rem;
  }
  @media screen and (max-width: 768px) {
        width: 18em;
        
    }

`

export const Name = styled.span`
    font-family: 'Pokemon Solid', sans-serif;
    letter-spacing: 3px;
    color: white;
`

export const Type = styled.span`
    letter-spacing: 2px;
`

export const DivInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 135px);
    text-align: center;
    overflow: auto;
    

    ul {
        padding: .4rem;
    }

`

export const PokemonDiv = styled.div`
    background: url(${backgroundInfo}) no-repeat center;
    min-height: 175px;
    position: relative;

`

export const ImgPokemon = styled.img`
    position: absolute ;
    top: 70px;
    left: 120px;
    
`


export const DivMoves = styled.div`
    display: flex;
    justify-content: space-around;
  

`

