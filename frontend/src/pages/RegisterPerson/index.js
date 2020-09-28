import React, { useCallback, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { Background } from '../../styles/global'
import { Container } from './style'
import Title from '../../components/title'
import Input from '../../components/input'
import Button from '../../components/button'
import getValidationErros from '../../Utils/getValidationErros'
import { AppContext } from '../../contexts/AppContext'

function RegisterName() {

    const $ = document.getElementById.bind(document)

    const { Appdata, setName, setIsCoordinator, setEmail, setPassword } = useContext(AppContext)

    const { IsCoordinator } = Appdata

    const history = useHistory()

    const [errors, setErrors] = useState({})

    const handleCheckIsCoordinator = useCallback(event => {
        setIsCoordinator(event.target.value)
    }, [IsCoordinator])

    const handleValidate = useCallback(async () => {

        const data = {
            name: $('name').value,
            email: $('email').value,
            password: $('password').value,
            IsCoordinator
        }

        try {
            const schema = yup.object().shape({
                name: yup.string().min(2, 'Name is required'),
                email: yup.string().email().min(5, 'E-mail is required'),
                password: yup.string().min(2, 'Password is required'),
                IsCoordinator: yup.string().required('Ocupation is required')
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            handleNext()

        } catch (err) {
            setErrors(getValidationErros(err))
            console.log(errors)
        }

    }, [IsCoordinator, errors])

    const handleNext = useCallback(() => {

        setName($('name').value)
        setEmail($('email').value)
        setPassword($('password').value)

        history.push('/register/avatar')
    }, [])

    return (
        <Background>
            <Container>
                <form>
                    <Title>Complete your first mission</Title>

                    <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                    />
                    <Input
                        margin={true}
                        id="email"
                        type="email"
                        placeholder="E-mail"
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                    />

                    {(errors.name) && <strong className="error">{errors.name}</strong>}
                    {(errors.email) && <strong className="error">{errors.email}</strong>}
                    {(errors.password) && <strong className="error">{errors.password}</strong>}

                    <div>
                        <p>Are you ?</p>
                        <div>
                            <input
                                onChange={handleCheckIsCoordinator}
                                type="radio"
                                id="developer"
                                name="gender"
                                value="developer" />
                            <label htmlFor="developer">Developer</label>
                            <br />
                            <input
                                onChange={handleCheckIsCoordinator}
                                type="radio"
                                id="coordinator"
                                name="gender"
                                value="coordinator" />
                            <label htmlFor="coordinator">Coordinator</label>
                        </div>
                    </div>
                    {(errors.IsCoordinator) && <strong className="error" >{errors.IsCoordinator}</strong>}
                    <Button id="next" onClick={handleValidate} >Next</Button>
                </form>
            </Container>
        </Background>
    )
}

export default RegisterName