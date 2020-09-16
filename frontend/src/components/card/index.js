import React from 'react'

import { Container } from './style'

function Card(props) {

    const handleCloseChallenge = id => {
        console.log('Close Challenge ', id)
    }

    const handleReOpenChallenge = id => {
        console.log('Re-Open Challenge ', id)
    }

    return (
        <Container status={props.challenge.status} >
            <p className="title">{props.challenge.title}</p>

            {(props.challenge.status === 'open') ? (
                <span className="close-open" onClick={() => handleCloseChallenge('id')} >
                    Close
                </span>
            ) : (
                    <span className="close-open" onClick={() => handleReOpenChallenge('id')} >
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