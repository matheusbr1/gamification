import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
        overflow-y: hidden;
    }

    html,
    body,
    div#root {
        height:100%;
    }

    h1 {
        font-family: Roboto, sans-serif;
    }

    button {
        cursor: pointer
    }
`