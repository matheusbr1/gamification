import React from 'react'

import { Background } from '../../styles/global'
import { Container } from './style'

function RegisterName() {
    return (

        <Background>
            <Container>

                <form>

                    <h1>Complete your first mission</h1>
                    <input id="name" type="text" placeholder="Type your name" />

                    <div>
                        <p>Are you ?</p>

                        <div>
                            <input type="checkbox" value="Coordinator" />
                            <label> Coordinator</label>
                        </div>

                        <div>
                            <input type="checkbox" value="Developer" />
                            <label> Developer </label>
                        </div>
                    </div>

                    <button id="next" >Next</button>

                </form>

            </Container>

        </Background>
    )
}

export default RegisterName