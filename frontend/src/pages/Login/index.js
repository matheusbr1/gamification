import React from 'react'

import { LoginStyle, Joystick, Background } from './style'
import JoystickImage from '../../assets/joystick-transparent.png'

function Login() {
    return (
        <Background>
            <LoginStyle>
                <h1>Login</h1>
                <input type="password" name="password" placeholder="Enter your password" />
                <div>
                    <span>If you Don’t have account </span>
                    <button type="submit">Sign up</button>
                </div>
                <button type="submit" id="start" >Start</button>
            </LoginStyle>
            <Joystick src={JoystickImage} alt="Joystick" />
        </Background>
    )
}

export default Login