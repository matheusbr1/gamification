import React from 'react'
import UserStars from '../../Utils/userStars'

import { Container } from './style'

const RankingCard = ({ user }) => {
    const baseURLIcon = '/static/media/'
    return (
        <Container>
            <img src={baseURLIcon.concat(user.avatar)} className="userIcon" />
            <div className="userInfos" >
                <p>{user.name}</p>
                <p>{UserStars(user.stars)}</p>
                <p>Complete tasks: {user.completeTasks}</p>
            </div>
        </Container>
    )
}

export default RankingCard