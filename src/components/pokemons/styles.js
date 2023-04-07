import styled from "styled-components";

import background from '../../assets/Pokebola.svg';


export const ContainerDiv = styled.div`
    
    width: 180px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`
export const ContainerPoke = styled.div`
    width: 180px;
    height: 322px;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const Name = styled.span`
    font-size: 25px;
    font-family: 'Pokemon Solid', sans-serif;
    padding-bottom: 0.5rem;
    letter-spacing: 2px;
    color: wheat;
`

export const Container = styled.div`

    background-image: url(${background});
    background-repeat: no-repeat;
    width: 150px;
    height: 250px;
    position: relative;
    
`

export const Img = styled.img`
    position: absolute;
    top: 110px;
    left: 30px;
    width: 70px;
`