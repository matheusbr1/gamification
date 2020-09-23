import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Background } from '../../styles/global'
import { Container, RankingIcon, Avatar } from './style'
import { AppContext } from '../../contexts/AppContext'
import rankingIcon from '../../assets/RankingIcon.png'
import RankingCard from '../../components/rankingCard'
import api from '../../services/api'
import SpinnerLoading from '../../components/spinnerLoading'
import Title from '../../components/title'

function Ranking() {

    const history = useHistory()
    const { Appdata, loading, setLoading } = useContext(AppContext)
    const { avatar } = Appdata
    const [users, setUsers] = useState([])

    useEffect(() => {
        setLoading(true)
        getUsers()
    }, [])

    const handleNavigateToDashboard = useCallback(() => {
        history.push('/dashboard')
    })

    const getUsers = async () => {
        const users = await api.get('users')
        console.log(users.data)
        setUsers(users.data)
        setLoading(false)
    }

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