import * as C from "./style"
import { GridItem } from "../grid-item"


export const Grid = ({ itens, setItens }) => {

    const onDelete = (ID, desc) => {
        const isConfirm = confirm(`Quer mesmo deletar ${desc}`)
        if(isConfirm){
            const newTransaction = itens.filter(transaction => transaction.idTransaction !== ID)
            setItens(newTransaction)
            localStorage.setItem('Transactions', JSON.stringify(newTransaction))
            return
        }
    }

    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={40}>Descrição</C.Th>
                    <C.Th width={40}>Valor</C.Th>
                    <C.Th width={10} alignCenter>Tipo</C.Th>
                    <C.Th width={10} alignCenter>Ação</C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </C.Tbody>
        </C.Table>
    )
}