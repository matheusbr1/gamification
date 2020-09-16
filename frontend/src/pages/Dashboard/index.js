import React, { useContext, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AiFillStar } from 'react-icons/ai'

import { Background, Bullet } from '../../styles/global'
import { AppContext } from '../../contexts/AppContext'
import { Container } from './style'
import Button from '../../components/button'
import Card from '../../components/card'

function Dashboard() {

    const { Appdata } = useContext(AppContext)
    const { name, ocupation, avatar, challenges } = Appdata

    const history = useHistory()

    const handleCreateChallenge = useCallback(() => {
        history.push('/register/challenge')
    }, [])

    const openChallenges = () => challenges.filter(challenge => challenge.status === 'open').length

    const [userStars, setUserStars] = useState(() => (<>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
    </>))

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
                        <span className="openTasks" >{openChallenges()} Open Challenges</span>
                        <span className="Stars" >{userStars}</span>
                    </div>
                </div>

                <div className="challenges">
                    <h1>Your challenges</h1>
                    <div className="challengeBox" >
                        {challenges.map(challenge => <Card key={challenge} challenge={challenge} />)}
                    </div>
                    <div className="bullets">
                        <Bullet>*</Bullet>
                        <Bullet>*</Bullet>
                        <Bullet>*</Bullet>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default Dashboard