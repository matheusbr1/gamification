import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

import { Background } from '../../styles/global'
import { Container } from './style'

import Input from '../../components/input'
import Button from '../../components/button'
import getValidationErros from '../../Utils/getValidationErros'

function RegisterName() {

    const $ = document.getElementById.bind(document)

    const history = useHistory()

    const [ocupation, setOcupation] = useState('')
    const [errors, setErrors] = useState({})

    const handleCheckOcupation = useCallback(event => {

        setOcupation(event.target.value)

    }, [ocupation])

    const handleValidate = useCallback(async () => {

        const data = {
            name: $('name').value,
            ocupation: ocupation
        }

        console.log(data)

        try {
            const schema = yup.object().shape({
                name: yup.string().min(2, 'Name is required'),
                ocupation: yup.string().required('Ocupation is required')
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            handleNext()

        } catch (err) {
            setErrors(getValidationErros(err))
            console.log(errors)
        }

    }, [ocupation, errors])

    const handleNext = useCallback(() => {
        history.push('/register/avatar')
    }, [])

    return (
        <Background>
            <Container>
                <form>
                    <h1>Complete your first mission</h1>
                    <Input id="name" type="text" placeholder="Name" />
                    {(errors.name) && <strong class="error">{errors.name}</strong>}
                    <div>
                        <p>Are you ?</p>
                        <div>
                            <input
                                onChange={handleCheckOcupation}
                                type="radio"
                                id="developer"
                                name="gender"
                                value="developer" />
                            <label for="developer">Developer</label>
                            <br />
                            <input
                                onChange={handleCheckOcupation}
                                type="radio"
                                id="coordinator"
                                name="gender"
                                value="coordinator" />
                            <label for="coordinator">Coordinator</label>
                        </div>
                    </div>
                    {(errors.ocupation) && <strong class="error" >{errors.ocupation}</strong>}
                    <Button id="next" onClick={handleValidate} >Next</Button>
                </form>
            </Container>
        </Background>
    )
}

export default RegisterName