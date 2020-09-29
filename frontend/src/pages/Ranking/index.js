import React, { useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Background } from '../../styles/global'
import { Container, Avatar } from './style'
import { useAppData } from '../../contexts/AppContext'
import RankingCard from '../../components/rankingCard'
import api from '../../services/api'
import SpinnerLoading from '../../components/spinnerLoading'
import Title from '../../components/title'

function Ranking() {

    const history = useHistory()
    const { Appdata, loading, setLoading } = useAppData()
    const { avatar } = Appdata
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const users = await api.get('users')
        console.log(users.data)
        setUsers(users.data)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        getUsers()
    }, [])

    const handleNavigateToDashboard = useCallback(() => history.push('/dashboard'))

    return (
        <Background>
            <Container>
                <Avatar src={avatar} onClick={handleNavigateToDashboard} />
                {/* <RankingIcon src={rankingIcon} /> */}

                <Title>Ranking</Title>

                {loading ? <SpinnerLoading /> : (<>
                    <div className="rankingCardsContainer" >
                        {users.map(user => (
                            <RankingCard key={user.id} user={user} />
                        ))}
                    </div>
                </>)}
            </Container>
        </Background>
    )
}

export default Ranking