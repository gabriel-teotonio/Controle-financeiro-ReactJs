import { useState } from "react"
import { Grid } from "../grid";
import * as C from "./style"



export const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateId = () => Math.round(Math.random() * 1000)

    const handleSave = () => {
        if(!desc || !amount){
            alert('informe a descrição e o valor')
            return
        }else if(amount < 1){
            alert('o valor tem que ser positivo!')
            return
        }

        const transaction = {
            desc: desc,
            amount: amount,
            expense: isExpense,
            idTransaction: generateId()
        }

        handleAdd(transaction)

        setDesc("")
        setAmount("")
    }

    return (
    <>
        <C.Container>
            <C.InputBox>
                <C.Label>Descrição</C.Label>
                <C.Input 
                    value={desc}
                    type="text"
                    placeholder="Decrição"
                    onChange={(e) => setDesc(e.target.value)}
                />
            </C.InputBox>
            <C.InputBox>
                <C.Label>Valor</C.Label>
                <C.Input 
                    value={amount}
                    type='number'
                    placeholder="valor"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </C.InputBox>

            <C.RadioGroup>
                <C.Label htmlFor="rIncome">Entrada</C.Label>
                <C.Input 
                    id="rIncome" 
                    name="transaction" 
                    type="radio" 
                    defaultChecked
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor="rExpense">Saída</C.Label>
                <C.Input 
                    id="rExpense"
                    name="transaction"
                    type="radio" 
                    onChange={() => setExpense(!isExpense)}
                />
            </C.RadioGroup>

            <C.Button onClick={handleSave}>Adicionar</C.Button>
        </C.Container>

        <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
    )
}