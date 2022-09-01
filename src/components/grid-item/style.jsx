import styled from "styled-components";



export const Tr = styled.tr``

export const Td = styled.td`
    padding-top: 1rem;
    text-align: ${(props) => props.alignCenter ? 'center' : 'start'};

    svg{
        height: 1.4rem;
        width: 1.4rem;

        @media (max-width:750px){
            width: 0.8rem;
            height: 0.8rem;
        }
    }
    .btn-delete{
        cursor: pointer;
        border-radius: 1rem;
        padding: 4px;
        &:hover{
            background-color: #fafafa7d;
        }

    }
`