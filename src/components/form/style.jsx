import styled from "styled-components";


export const Container = styled.div`
    background-color: #e2e2e2;
    max-width: 90%;
    width: 1120px;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    border-radius: 0.3rem;

    @media (max-width:750px){
        display: grid;
        flex-direction: column;
        gap: 1rem;
    }
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`
export const Label = styled.label``

export const Input = styled.input`
    border: 1px;
    border-radius: 4px;
    box-shadow: none;
    outline: none;
    padding: .4rem;
`

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.6rem 0;

    Input{
        accent-color: #11b5c7;
    }
`

export const Button = styled.button`
    padding: 1rem 2rem;
    background-color: #0c89dc;
    border: none;
    border-radius: 0.2rem;
    color: white;
    font-weight: 600;

    &:hover{
        background-color: #0c89dcc7;
    }
`