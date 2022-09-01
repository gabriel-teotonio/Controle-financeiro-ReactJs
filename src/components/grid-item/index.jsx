import * as C from './style';
import {
    TbTrashX,
    TbArrowBigDownLines,
    TbArrowBigUpLines,
}from 'react-icons/tb'


export const GridItem = ({ item, onDelete }) => {
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (<TbArrowBigDownLines color='red'/>) : (<TbArrowBigUpLines color='green'/>)}
            </C.Td>
            <C.Td alignCenter>
                <TbTrashX className='btn-delete' onClick={() => onDelete(item.idTransaction, item.desc)}/>
            </C.Td>
        </C.Tr>
    )
}