import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    height:100vh;

    strong.error {
        font-size:20px;
        margin: 10px 0;
        color: tomato;
    }

    form {
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;

        max-width: 600px;


        h1 {
            font-size:45px;
            margin-bottom: 40px;
        }

        > div {

            margin: 25px auto;

            p {
                font-size: 30px;
            }

            div {
                
                display: block;

                input {
                    width: 22px;
                    height: 22px;
                    margin-right:5px;
                    margin-top: 10px;
                }

                label {
                    font-size: 30px;
                    font-weight: 500
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        form {
            h1 {
                font-size: 28px;
                margin: 20px;
            }

            div {
                div {
                    label {
                        font-size: 25px;
                    }
                }
            }
        }
    }
`