import styled from 'styled-components'

export const ButtonStyle = styled.button`
    
    height:80px;
    width: 100%;
    
    max-width: 380px;

    border-radius:20px;
    border: none;
    color: #fff;
    background: #2B95F2;
    font-size: 40px;
    font-weight:bold;
    transition: background 0.2s;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        height:70px;
        width: 90%;
    }

    &:hover {
        background: #006fd1;
    }

`