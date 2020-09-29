import styled from 'styled-components'
import { IoIosReturnLeft } from 'react-icons/io'

import Input from '../../components/input'

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 600px;

        margin: 10px 0;

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

    @media(max-width: 768px) {
        width: 90%;
        margin: 10% auto;
        height: unset;
    }
`

export const TextArea = styled(Input)`
        min-height:160px;
`

export const ReturnIcon = styled(IoIosReturnLeft)`
    font-size: 35px;
    position: absolute;
    top: 15px;
    left: 15px;
`