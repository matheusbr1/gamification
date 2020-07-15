import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    height: 100vh;
    max-height: 1000px;

    div.userDetails {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        border: solid 2px;
        width: 768px;

        img {
            max-width: 200px;
            width : 30%
        }

        div {
            width : 65%;
            padding: 20px 50px;
            border-radius:10px;
            
            background: #C4C4C4;

            p {
                font-size: 30px;
            }   

            > span {
                margin-right: 5%;
            }

            span {
                display: inline-block;
                margin-top: 10px;
                font-size: 20px;
            }
        }
    }

    div.challenges {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        height: 500px;

        border: solid 2px;

        h1 {
            font-size: 45px;
            text-align: center;
        }   

        div.challengeBox {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 5% 2%;

            width: 768px;
            height: 300px;

            padding: 0 5%;

            div {
                border: solid 2px;
                padding: 2%;
            }
        }

        div.bullets {
            display: flex;
        }
    }

`