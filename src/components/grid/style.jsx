import styled from "styled-components";


export const Table = styled.table`
    width: 90%;
    background-color: #e2e2e2;
    padding: 1rem;
    max-width: 1120px;
    margin: 1rem auto;
    border-radius: .3rem;
`

export const Thead = styled.thead``
export const Tbody = styled.tbody``
export const Tr = styled.tr``

export const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 5px;
    text-align: ${(props) => (props.alignCenter) ? 'center' : 'start'};
    width: ${(props) => (props.width ? '%' : 'auto')};
`