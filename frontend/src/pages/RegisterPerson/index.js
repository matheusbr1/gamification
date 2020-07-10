import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Background } from '../../styles/global'
import { Container } from './style'

import Input from '../../components/input'
import Button from '../../components/button'

function RegisterName() {

    const history = useHistory()

    const handleNext = useCallback(() => {
        history.push('/register/avatar')
    }, [])

    return (
        <Background>
            <Container>
                <form>
                    <h1>Complete your first mission</h1>
                    <Input id="name" type="text" placeholder="Name" />
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
                    <Button id="next" onClick={handleNext} >Next</Button>
                </form>
            </Container>
        </Background>
    )
}

export default RegisterName