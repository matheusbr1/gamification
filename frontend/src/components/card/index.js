import React from 'react'
import { useAppData } from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from './style'
import api from '../../services/api'

function Card(props) {

    const { token } = useAuth()

    const { Appdata, setChallenges, setLoading } = useAppData()
    const { challenges } = Appdata
    const { currentChallengePage, challengesPage } = props

    const handleChangeChallengeStatus = (id, status) => {
        setLoading(true)

        console.log(`${status} Challenge ${id}`)

        const challengeFiltered = challenges.filter(item => item.id === id)[0]

        api.put(`challenges/${id}`, {
            ...challengeFiltered,
            status
        }, {
            headers: { authorization: `Bearer ${token}` }
        })
            .then(() => api.get(`challenges?_page=${currentChallengePage}&_limit=${challengesPage}`, {
                headers: { authorization: `Bearer ${token}` }
            }))
            .then(response => {
                setChallenges(response.data.challenges)
                console.log(response.data.challenges)
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
            <span className="deadline">
                Deadline {props.challenge.deadline}
            </span>
            <span className="creation">
                Created at {props.challenge.createdAt} by {props.challenge.requester}
            </span>
            <span className="status">{props.challenge.status}</span>
        </Container>
    )
}

export default Card 