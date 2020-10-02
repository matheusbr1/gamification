import React from 'react'
import UserStars from '../../Utils/userStars'

import { Container } from './style'

const RankingCard = ({ user }) => {
    return (
        <Container>
            <img src={user.avatar} className="userIcon" />
            <div className="userInfos" >
                <p>{user.name}</p>
                <p>{UserStars(user.stars)}</p>
                <p>Complete tasks: {user.challenges.length}</p>
            </div>
        </Container>
    )
}

export default RankingCard