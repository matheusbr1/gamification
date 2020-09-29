import React, { useCallback, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppData } from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'
import { Background } from '../../styles/global'
import api from '../../services/api'
import Card from '../../components/card'
import SpinnerLoading from '../../components/spinnerLoading'
import UserStars from '../../Utils/userStars'
import Bullets from '../../components/bullets'
import Title from '../../components/title'
import rankingIcon from '../../assets/RankingIcon.png'
import { Container, UserDetails, RankingIcon, Challenges, LogOutIcon, CreateIcon } from './style'

function Dashboard() {

    const history = useHistory()

    const {
        Appdata,
        setChallenges,
        setName,
        setEmail,
        setIsCoordinator,
        setAvatar,
        loading,
        setLoading
    } = useAppData()

    const { token, Authenticated, signOut } = useAuth()

    const { name, IsCoordinator, avatar, challenges, userId } = Appdata

    const [totalPages, setTotalPages] = useState(0)
    const [openChallenges, setOpenChallenges] = useState(0)
    const [currentChallengePage, setCurrentChallengePage] = useState(1)
    const challengesPage = 4

    const [userStars, setUserStars] = useState(0)

    const handleCreateChallenge = useCallback(() => history.push('/register/challenge'))
    const handleNatigateToRanking = useCallback(() => history.push('/ranking'))


    const getUserData = async () => {
        const userData = await api.get(`users/${userId}`)
        const { name, email, coordinator, avatar, stars } = userData.data

        if (!!userData.data) {
            setName(name)
            setEmail(email)
            setIsCoordinator(coordinator)
            setAvatar(avatar)
            setUserStars(stars)
        } else {
            alert('error')
        }
    }

    const getUserChallenges = useCallback(() => {
        api.get('challenges', { headers: { authorization: `Bearer ${token}` } }).then(response => {
            setOpenChallenges(() => response.data.challenges.filter(challenge => challenge.status === 'open').length)
        })
    })

    useEffect(() => {
        // Verify if user is authenticated
        if (!Authenticated) return signOut()
        getUserData()
        getUserChallenges()
    }, [challenges])

    useEffect(() => {
        // Verify if user is authenticated
        if (!Authenticated) return signOut()
        getMoreItens(currentChallengePage)
    }, [])

    const getMoreItens = useCallback(page => {

        console.log('Getting Itens page:', page)
        setCurrentChallengePage(page)

        setLoading(true)
        setChallenges([])

        return api.get(`challenges?_page=${page}&_limit=${challengesPage}`, {
            headers: { authorization: `Bearer ${token}` }
        }).then(async response => {

            const { challenges, count } = response.data

            let countItens = parseInt(response.headers['x-total-count'])

            if (isNaN(countItens)) {
                countItens = count
            }

            if (countItens <= challengesPage) {
                setTotalPages(1)
            } else {
                setTotalPages(() => {
                    const conditional = countItens % 2 === 0 && challengesPage % 2 === 0 && countItens > 4 && countItens % challengesPage === 0
                    return conditional ? Math.floor(countItens / challengesPage) :
                        Math.floor(countItens / challengesPage + 1)
                })
            }

            setChallenges(challenges)
            setLoading(false)
            console.log(challenges)
        })
    })

    return (
        <Background>
            <Container>
                <LogOutIcon onClick={signOut} />

                {!!IsCoordinator && (<CreateIcon onClick={handleCreateChallenge} />)}

                <RankingIcon src={rankingIcon} className="rankingIcon" onClick={handleNatigateToRanking} />

                {name && avatar ? (
                    <UserDetails>
                        <img src={avatar} alt='User Avatar' />
                        <div>
                            <p>{name}</p>
                            <span className="openTasks" >{openChallenges} Open Challenges</span>
                            <span className="Stars" >{UserStars(userStars)}</span>
                        </div>
                    </UserDetails>
                ) : <SpinnerLoading />}

                <Challenges>
                    {(loading) ? <SpinnerLoading /> :
                        (challenges.length === 0 && openChallenges.length === 0) ? (
                            <h2>You don’t have any challange</h2>
                        ) :
                            (<>
                                <Title>
                                    Your Challenges
                                    {!!IsCoordinator && (<CreateIcon onClick={handleCreateChallenge} />)}
                                </Title>
                                <div className="challengeBox" >
                                    {challenges.map(challenge => (
                                        <Card
                                            key={challenge.id}
                                            challengesPage={challengesPage}
                                            currentChallengePage={currentChallengePage}
                                            challenge={challenge}
                                        />
                                    ))}
                                </div>
                                <Bullets totalPages={totalPages} getMoreItens={getMoreItens} origin='Dashboard' />
                            </>)}
                </Challenges>
            </Container>
        </Background>
    )
}

export default Dashboard