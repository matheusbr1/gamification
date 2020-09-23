import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const UserStars = userStars => {
    let stars = []
    for (let i = 1; i <= userStars; i++) stars.push(i)
    return stars.map(star => <AiFillStar key={star} />)
}

export default UserStars