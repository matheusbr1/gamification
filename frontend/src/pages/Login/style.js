import styled from 'styled-components'
import BackgoundImage from '../../assets/backgound.png'

export const LoginStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:350px;
    margin:auto;
    height:100%;

    h1 {
        font-size:60px;
        margin-bottom: 40px;
    }

    input {
        height:80px;
        border-radius:20px;
        border: 1px solid;
        padding: 0 30px;
        font-size: 25px;
        margin-bottom: 25px;
    }

    div {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-evenly;

        span {
            font-size: 20px;
            width: 50%
        }

        button {
            font-size: 20px;
            padding: 10px;
            background: none;
            border-radius: 20px;
            border: 1px solid;
            width: 30%;
            transition: color 0.2s;

            &:hover {
                color:green;
            }

        }
    }

    button#start {
        height:80px;
        border-radius:20px;
        border: none;
        color: #fff;
        background: #2B95F2;
        font-size: 40px;
        font-weight:bold;
        transition: background 0.2s;

        &:hover {
            background: #006fd1;
        }
    }

`;

export const Joystick = styled.img`
    position: absolute;
    bottom:50px;
    left:-50px;
    transform: rotate(45deg)
`;

export const Background = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    background-image: url(${BackgoundImage});
    background-blend-mode: color;
    width:100%;
    height:100%;
`