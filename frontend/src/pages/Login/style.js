import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:380px;
    min-height:380px;
    margin:auto;
    height:100%;

    h1 {
        font-size:60px;
        margin-bottom: 15px;
        text-align: center;
    }

    div {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-evenly;

        span {
            font-size: 20px;
            width: 50%;
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


    @media screen and (max-width:768px) {
        h1 {
            font-size: 40px;
        }

        div {
            button {
                font-size: 17px;
            }
        }
    }


`;

export const Joystick = styled.img`
    position: absolute;
    bottom:50px;
    left:-50px;
    transform: rotate(45deg);

    @media screen and (max-width:768px) {
        display:none;
    }
`;