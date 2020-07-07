import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import BackgoundImage from '../assets/backgound.png'

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

    h1,label,span,p {
        font-family: Roboto, sans-serif;
    }

    button {
        cursor: pointer
    }
`
export const Background = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    background-image: url(${BackgoundImage});
    background-blend-mode: color;
    width:100%;
    height:100%;
`