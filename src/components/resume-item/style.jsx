import styled from "styled-components";



export const Container = styled.div`
    background-color: #e2e2e2;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: .2rem;
    padding: .5rem 1rem;
    width: 30%;


    @media(max-width:750px){
        width: 20%;
        p{
            font-size: 12px;
        }
        span{
            font-size: .9rem;
        }
        svg{
            display: none;
        }
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    padding: .5rem 0;

    svg{
        width: 25px;
        height: 25px;
    }
`

export const Total = styled.span`
    font-size: 1.8rem;
    font-weight: 700;
`