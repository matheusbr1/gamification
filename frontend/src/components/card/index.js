import React, { useContext } from 'react'

import { AppContext } from '../../contexts/AppContext'

import api from '../../services/api'

import { Container } from './style'

function Card(props) {

    const { Appdata, setChallenges, setLoading } = useContext(AppContext)
    const { challenges } = Appdata

    const handleChangeChallengeStatus = (id, status) => {
        setLoading(true)

        console.log(`${status} Challenge ${id}`)

        const challengeFiltered = challenges.filter(item => item.id === id)[0]

        api.put(`challenges/${id}`, {
            ...challengeFiltered,
            status
        })
            .then(() => api.get('challenges'))
            .then(response => {
                setChallenges(response.data)
                setLoading(false)
            })
    }

    return (
        <Container status={props.challenge.status} >
            <p className="title">{props.challenge.title}</p>

            {(props.challenge.status === 'open') ? (
                <span className="close-open" onClick={() => handleChangeChallengeStatus(props.challenge.id, 'closed')} >
                    Close
                </span>
            ) : (
                    <span className="close-open" onClick={() => handleChangeChallengeStatus(props.challenge.id, 'open')} >
                        Re-Open
                    </span>
                )}

            <p className="description">{props.challenge.description}</p>
            <span className="creation">
                Created at {props.challenge.createdAt} by {props.challenge.requester}
            </span>
            <span className="status">{props.challenge.status}</span>
        </Container>
    )
}

export default Card 