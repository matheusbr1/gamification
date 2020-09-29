import React, { useCallback, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import * as yup from 'yup'

import { Container, Joystick } from './style'
import { Background } from '../../styles/global'
import JoystickImage from '../../assets/joystick-transparent.png'

import { useAuth } from '../../contexts/AuthContext'
import { useAppData } from '../../contexts/AppContext'

import Input from '../../components/input'
import Button from '../../components/button'
import getValidationErrors from '../../Utils/getValidationErros'

function Login() {
    let history = useHistory();

    const { setAuthenticated, ClearStoragedToken, signIn } = useAuth()
    const { ClearStoragedAppData } = useAppData()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setAuthenticated(false)
        signIn()
    }, [])

    const handleSignUp = useCallback(() => {
        ClearStoragedAppData()
        ClearStoragedToken()
        history.push('/register')
    }, [])

    const handleValidate = useCallback(async () => {

        const $ = document.querySelector.bind(document)

        const input = {
            email: $('input[name="email"]').value,
            password: $('input[name="password"]').value
        }

        try {
            const schema = yup.object().shape({
                email: yup.string().required('E-mail is required'),
                password: yup.string().required('Password is required')
            })

            await schema.validate(input)

            // Logar
            signIn({
                email,
                password
            })

        } catch (err) {
            console.log(err)
            setErrors(getValidationErrors(err))
            console.log(errors)
        }

    }, [errors, email, password])

    return (
        <Background>
            <Container>
                <h1>Login</h1>

                <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    margin={true}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {(errors.email) && <strong className="error" >{errors.email}</strong>}
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
                    id="start"
                >
                    Start
                </Button>
            </Container>
            <Joystick src={JoystickImage} alt="Joystick" />
        </Background>
    )
}

export default Login