import React, { useCallback } from 'react'
import { useHistory } from "react-router-dom";

import { Container, Joystick } from './style'
import { Background } from '../../styles/global'
import JoystickImage from '../../assets/joystick-transparent.png'

import Input from '../../components/input'
import Button from '../../components/button'

function Login() {
    let history = useHistory();

    const handleSignUp = useCallback(() => {
        history.push('/register')
    }, [])

    const handleStart = useCallback(() => {
        history.push('/dashboard')
    }, [])

    return (
        <Background>
            <Container>
                <h1>Login</h1>
                <Input type="password" name="password" placeholder="Password" />
                <div>
                    <span>If you Don’t have account </span>
                    <button
                        type="submit"
                        id="signup"
                        onClick={handleSignUp} >Sign up</button>
                </div>
                <Button
                    type="submit"
                    onClick={handleStart}
                    id="start" >Start</Button>
            </Container>
            <Joystick src={JoystickImage} alt="Joystick" />
        </Background>
    )
}

export default Login