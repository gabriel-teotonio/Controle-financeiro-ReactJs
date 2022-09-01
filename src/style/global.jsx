
import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body{
        background-color: white;
        font-family: sans-serif;
    }

    button{
        cursor: pointer;
    }

`

export default Global;