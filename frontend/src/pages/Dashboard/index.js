import React, { useContext, useCallback, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

import { AiFillStar } from 'react-icons/ai'
import { Ring } from 'react-awesome-spinners'

import { Background, Bullet } from '../../styles/global'
import { AppContext } from '../../contexts/AppContext'
import { Container } from './style'
import Button from '../../components/button'
import Card from '../../components/card'

function Dashboard() {

    const history = useHistory()

    const { Appdata, setChallenges, loading, setLoading } = useContext(AppContext)
    const { name, ocupation, avatar, challenges, } = Appdata

    const [totalPages, setTotalPages] = useState(0)
    const [challengesPage, setChallengesPage] = useState(4)
    const [openChallenges, setOpenChallenges] = useState(0)

    const [userStars, setUserStars] = useState(4)

    const handleCreateChallenge = useCallback(() => {
        history.push('/register/challenge')
    }, [])

    useEffect(() => {
        api.get('challenges').then(response => {
            setOpenChallenges(() => response.data.filter(challenge => challenge.status === 'open').length)
        })
    }, [challenges])

    useEffect(() => {
        getMoreItens(1)
    }, [])

    const getMoreItens = useCallback(page => {
        setLoading(true)
        setChallenges([])
        return api.get(`challenges?_page=${page}&_limit=${challengesPage}`).then(response => {

            const countItens = parseInt(response.headers['x-total-count'])

            if (countItens <= challengesPage) {
                setTotalPages(1)
            } else {
                setTotalPages(() => {
                    const conditional = countItens % 2 === 0 && challengesPage % 2 === 0
                    return conditional ? Math.floor(countItens / challengesPage) :
                        Math.floor(countItens / challengesPage + 1)
                })
            }

            setChallenges(response.data)
            setLoading(false)

            console.log(response.data)
        })

    })

    const UserStars = () => {
        let stars = []
        for (let i = 1; i <= userStars; i++) stars.push(i)
        return stars.map(star => <AiFillStar key={star} />)
    }

    const bulletsPagination = () => {
        let bullets = []
        for (let i = 1; i <= totalPages; i++) bullets.push(i)
        return (bullets.length > 1) && (bullets.map(page => <Bullet key={page} onClick={() => getMoreItens(page)} >*</Bullet>))
    }

    return (
        <Background>
            <Container>

                {ocupation === 'coordinator' && (<div className="createTaskButtonContainer">
                    <Button onClick={handleCreateChallenge} >Create a challenge</Button>
                </div>)}

                <div className="userDetails">
                    <img src={avatar} />
                    <div>
                        <p>{name}</p>
                        <span className="openTasks" >{openChallenges} Open Challenges</span>
                        <span className="Stars" >{UserStars()}</span>
                    </div>
                </div>

                <div className="challenges">
                    {(loading) ? (
                        <div className="ring"> <Ring size={60} /> </div>
                    ) :
                        (challenges.length === 0 && openChallenges.length === 0) ? (
                            <h2>You don’t have any challange</h2>
                        ) :
                            (<>
                                <h1>Your Challenges</h1>
                                <div className="challengeBox" >
                                    {challenges.map(challenge => {
                                        return <Card key={challenge.id} challenge={challenge} />
                                    })}
                                </div>
                                <div className="bullets">{bulletsPagination()}</div>
                            </>)}

                </div>
            </Container>
        </Background>
    )
}

export default Dashboard