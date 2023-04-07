import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    gap: .4rem;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
    } 
`

export const Input = styled.input`
    width: 50%;
    height: 44px;
    line-height: 64px;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    background: transparent;
    color: white;
    padding: .2rem;
    border: 1px solid white;

    &::placeholder {
        color: #7f8c8d;
    }

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    background: transparent;
    width: 50px;
    height: 44px;
    border: 1px solid;
    transition: background 0.3s;
    border-radius: 10px;

    &:hover {
        background: #2d2d2d;
    }

`