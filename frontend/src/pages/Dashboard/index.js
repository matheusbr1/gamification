import React, { useContext, useCallback, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContext'
import { Background } from '../../styles/global'
import api from '../../services/api'
import Button from '../../components/button'
import Card from '../../components/card'
import SpinnerLoading from '../../components/spinnerLoading'
import UserStars from '../../Utils/userStars'
import Bullets from '../../components/bullets'
import Title from '../../components/title'
import rankingIcon from '../../assets/RankingIcon.png'
import { Container, UserDetails, RankingIcon, Challenges, ButtonCreateTaskContainer } from './style'

function Dashboard() {

    const history = useHistory()

    const { Appdata, setChallenges, loading, setLoading } = useContext(AppContext)
    const { name, ocupation, avatar, challenges, } = Appdata
    const [totalPages, setTotalPages] = useState(0)
    const [openChallenges, setOpenChallenges] = useState(0)
    const [currentChallengePage, setCurrentChallengePage] = useState(1)
    const challengesPage = 4

    const handleCreateChallenge = useCallback(() => {
        history.push('/register/challenge')
    }, [])

    const handleNatigateToRanking = useCallback(() => {
        history.push('/ranking')
    }, [])

    useEffect(() => {
        api.get('challenges').then(response => {
            setOpenChallenges(() => response.data.filter(challenge => challenge.status === 'open').length)
        })
    }, [challenges])

    useEffect(() => {
        getMoreItens(currentChallengePage)
    }, [])

    const getMoreItens = useCallback(page => {

        console.log('Getting Itens page:', page)
        setCurrentChallengePage(page)

        setLoading(true)
        setChallenges([])
        return api.get(`challenges?_page=${page}&_limit=${challengesPage}`).then(response => {

            const countItens = parseInt(response.headers['x-total-count'])

            if (countItens <= challengesPage) {
                setTotalPages(1)
            } else {
                setTotalPages(() => {
                    const conditional = countItens % 2 === 0 && challengesPage % 2 === 0 && countItens > 4 && countItens % challengesPage === 0
                    return conditional ? Math.floor(countItens / challengesPage) :
                        Math.floor(countItens / challengesPage + 1)
                })
            }

            setChallenges(response.data)
            setLoading(false)
            console.log(response.data)
        })
    })

    return (
        <Background>
            <Container>
                {ocupation === 'coordinator' && (<ButtonCreateTaskContainer>
                    <Button onClick={handleCreateChallenge} >Create a challenge</Button>
                </ButtonCreateTaskContainer>)}

                <RankingIcon src={rankingIcon} className="rankingIcon" onClick={handleNatigateToRanking} />

                <UserDetails>
                    <img src={avatar} alt='User Avatar' />
                    <div>
                        <p>{name}</p>
                        <span className="openTasks" >{openChallenges} Open Challenges</span>
                        <span className="Stars" >{UserStars(5)}</span>
                    </div>
                </UserDetails>

                <Challenges>
                    {(loading) ? <SpinnerLoading /> :
                        (challenges.length === 0 && openChallenges.length === 0) ? (
                            <h2>You don’t have any challange</h2>
                        ) :
                            (<>
                                <Title>Your Challenges</Title>
                                <div className="challengeBox" >
                                    {challenges.map(challenge => {
                                        return (
                                            <Card
                                                key={challenge.id}
                                                challengesPage={challengesPage}
                                                currentChallengePage={currentChallengePage}
                                                challenge={challenge}
                                            />
                                        )
                                    })}
                                </div>
                                <Bullets totalPages={totalPages} getMoreItens={getMoreItens} origin='Dashboard' />
                            </>)}
                </Challenges>
            </Container>
        </Background>
    )
}

export default Dashboard