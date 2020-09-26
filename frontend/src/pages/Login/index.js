import React, { useCallback, useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import * as yup from 'yup'

import { Container, Joystick } from './style'
import { Background } from '../../styles/global'
import JoystickImage from '../../assets/joystick-transparent.png'

import { AuthContext } from '../../contexts/AuthContext'

import Input from '../../components/input'
import Button from '../../components/button'
import getValidationErrors from '../../Utils/getValidationErros'

import api from '../../services/api'

function Login() {
    let history = useHistory();

    const { SaveToken } = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState({})

    const handleSignUp = useCallback(() => {
        history.push('/register')
    }, [])

    const handleStart = async () => {

        const sign = await api.post('/auth', {
            email,
            password
        })

        SaveToken(sign.data.token)

        history.push('/dashboard')
    }

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

            handleStart()

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