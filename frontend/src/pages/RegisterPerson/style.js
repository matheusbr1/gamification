import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    height:100vh;

    strong.error {
        font-size:20px;
        margin-bottom: 10px;
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

        div {
            p {
                font-size: 30px;
                margin-bottom:20px;
            }

            div {
                
                display: block;
                margin-bottom:20px;

                input {
                    width: 22px;
                    height: 22px;
                    margin-right:5px;
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
                font-size:35px;
                margin-bottom: 20px;
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