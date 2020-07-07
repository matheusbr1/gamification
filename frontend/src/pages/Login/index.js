import React from 'react'
import { useHistory } from "react-router-dom";

import { Container, Joystick } from './style'
import { Background } from '../../styles/global'
import JoystickImage from '../../assets/joystick-transparent.png'

function Login() {
    let history = useHistory();

    function handleSignUp() {
        history.push('/register')
    }

    function handleStart() {
        history.push('/dashboard')
    }

    return (
        <Background>
            <Container>
                <h1>Login</h1>
                <input type="password" name="password" placeholder="Enter your password" />
                <div>
                    <span>If you Don’t have account </span>
                    <button
                        type="submit"
                        id="signup"
                        onClick={handleSignUp} >Sign up</button>
                </div>
                <button
                    type="submit"
                    onClick={handleStart}
                    id="start" >Start</button>
            </Container>
            <Joystick src={JoystickImage} alt="Joystick" />
        </Background>
    )
}

export default Login