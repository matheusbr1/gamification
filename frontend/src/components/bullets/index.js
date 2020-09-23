import React from 'react'
import { Container, Bullet } from './style'

const Bullets = ({ totalPages, origin, getMoreItens }) => {

    let bullets = []
    for (let i = 1; i <= totalPages; i++) bullets.push(i)

    const bulletsByPage = () => {
        if (origin === 'Dashboard') {
            return bullets.length > 1 &&
                bullets.map(page => <Bullet key={page} onClick={() => getMoreItens(page)} >*</Bullet>)
        }

        if (origin === 'RegisterAvatar') {
            return bullets.length > 1 &&
                bullets.map(page => <Bullet key={page} onClick={() => console.log('Pagination Avatar')} >*</Bullet>)
        }
    }

    return <Container>{bulletsByPage()}</Container>
}

export default Bullets