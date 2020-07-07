import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    height:100vh;

    form {
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;

        max-width: 600px;


        h1 {
            text-align: center;
            font-size:45px;
            margin-bottom: 40px;
        }

        input#name {
            height:80px;
            border-radius:20px;
            border: 1px solid;
            padding: 0 30px;
            font-size: 25px;
            margin-bottom: 25px;
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

        button#next {
            height:80px;
            border-radius:20px;
            width: 353px;
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
    }

`