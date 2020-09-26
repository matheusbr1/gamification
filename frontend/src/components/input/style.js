import styled, { css } from 'styled-components'

export const Container = styled.input`
    height:80px;
    width: 100%;
    max-width: 380px;
    border-radius:20px;
    border: 1px solid;
    padding: 0 30px;
    font-size: 25px;
    margin: 25px auto;

    @media screen and (max-width: 768px ) {
        width: 90%;
        height:70px;
    }

    ${props => !props.margin && css`
        margin: unset;
    `}

    ${props => props.isFocused && css`
        border-color: #2B95F2;
    `}
`