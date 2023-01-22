import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    button{
        border: none;
        cursor: pointer;
    }
    button:hover{
        opacity: 0.8;
    }
    button:active{
        opacity: 0.6;
    }
`
export default Global