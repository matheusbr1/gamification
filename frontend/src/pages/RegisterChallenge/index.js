import React, { useCallback, useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import { AppContext } from '../../contexts/AppContext'
import { Background } from '../../styles/global'
import { Container, TextArea } from './style'
import api from '../../services/api'
import Button from '../../components/button'
import Input from '../../components/input'
import Title from '../../components/title'
import SpinnerLoading from '../../components/spinnerLoading'

function RegisterChallenge() {

    const history = useHistory()

    const { setChallenge, Appdata, loading, setLoading } = useContext(AppContext)
    const { name } = Appdata

    const [assignee, setAssignee] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [deadline, setDeadline] = useState()

    const challangeData = {
        title,
        assignee,
        description,
        deadline,
        status: 'open',
        requester: name
    }

    const handleFormData = useCallback(() => {
        setLoading(true)
        setChallenge(challangeData)

        api.post('challenges', challangeData).then(() => {
            setLoading(false)
            alert('Challenge Created')
        })

        history.push('/dashboard')

    }, [challangeData])

    return (
        <Background>
            <Container>
                {(loading ? <SpinnerLoading /> : (
                    <>
                        <Title>Create a Challenge</Title>
                        <form>
                            <Input
                                id="colaborator-name"
                                type="text"
                                placeholder="Colaborator's name"
                                onChange={e => setAssignee(e.target.value)}
                            />
                            <Input
                                id="title"
                                type="text"
                                placeholder="Title"
                                onChange={e => setTitle(e.target.value)}
                            />
                            <TextArea
                                id="description"
                                type="text"
                                placeholder="Description"
                                onChange={e => setDescription(e.target.value)}
                            />
                            <label htmlFor="date" > Data final </label>
                            <Input
                                id="date"
                                type="date"
                                onChange={e => setDeadline(e.target.value)}
                            />
                        </form>
                        <Button type="submit" onClick={handleFormData} >Create</Button>
                    </>
                ))}
            </Container>
        </Background>
    )
}

export default RegisterChallenge