import styled from 'styled-components'

import Input from '../../components/input'

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    h1 {
        font-size: 45px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 600px;

        margin: 40px 0;

        input {
            width:100%;
            max-width: 600px;
            margin: 15px auto;
        }

        label {
            font-size: 25px;
            margin-left:10px;
        }
    }
`

export const TextArea = styled(Input)`
        min-height:160px;
`