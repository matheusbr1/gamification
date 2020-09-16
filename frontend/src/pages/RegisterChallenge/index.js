import React, { useCallback, useContext, useState } from 'react'
import { useHistory } from "react-router-dom";

import { AppContext } from '../../contexts/AppContext'
import { Background } from '../../styles/global'
import { Container, TextArea } from './style'
import Button from '../../components/button'
import Input from '../../components/input'

function RegisterChallenge() {

    const history = useHistory()

    const { setChallenge } = useContext(AppContext)

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
        requester: 'Fulano',
        createdAt: `
            ${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}
        `
    }

    const handleFormData = useCallback(() => {
        alert('Challenge Created')
        setTimeout(() => {
            setChallenge(challangeData)
            history.push('/dashboard')
        }, 1000)
    }, [challangeData])

    return (
        <Background>
            <Container>
                <h1>Create a Challenge</h1>
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
            </Container>
        </Background>
    )
}

export default RegisterChallenge