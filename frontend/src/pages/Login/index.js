import React, { useCallback, useState } from 'react'
import { useHistory } from "react-router-dom";
import * as yup from 'yup'

import { Container, Joystick } from './style'
import { Background } from '../../styles/global'
import JoystickImage from '../../assets/joystick-transparent.png'

import Input from '../../components/input'
import Button from '../../components/button'
import getValidationErrors from '../../Utils/getValidationErros'

function Login() {
    let history = useHistory();

    const [errors, setErrors] = useState({})

    const handleSignUp = useCallback(() => {
        history.push('/register')
    }, [])

    const handleValidate = useCallback(async () => {

        const input = { password: document.querySelector('input').value }

        try {
            const schema = yup.object().shape({
                password: yup.string().required('Password is required')
            })

            await schema.validate(input)

            handleStart()

        } catch (err) {
            console.log(err)
            setErrors(getValidationErrors(err))
            console.log(errors)
        }

    }, [errors])

    const handleStart = useCallback(() => {
        history.push('/dashboard')
    }, [])

    return (
        <Background>
            <Container>
                <h1>Login</h1>
                <Input type="password" name="password" placeholder="Password" />
                {(errors.password) && <strong className="error" >{errors.password}</strong>}
                <div>
                    <span>If you Don’t have account </span>
                    <button
                        type="submit"
                        id="signup"
                        onClick={handleSignUp} >Sign up</button>
                </div>
                <Button
                    type="submit"
                    onClick={handleValidate}
                    id="start" >Start</Button>
            </Container>
            <Joystick src={JoystickImage} alt="Joystick" />
        </Background>
    )
}

export default Login