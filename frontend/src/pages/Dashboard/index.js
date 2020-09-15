import React, { useContext, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { AiFillStar } from 'react-icons/ai'

import { Background, Bullet } from '../../styles/global'
import { AppContext } from '../../contexts/AppContext'
import { Container } from './style'
import Button from '../../components/button'
import RegisterChallenge from '../RegisterChallenge'

function Dashboard() {

    const { avatar, name, ocupation } = useContext(AppContext)

    const history = useHistory()

    const data = {
        avatar,
        name,
        ocupation
    }

    const handleCreateChallenge = useCallback(() => {
        history.push('/register/challenge')
    }, [])

    useEffect(() => {
        localStorage.setItem('@Gamification:data', JSON.stringify(data))
    }, [data])

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
                        <span className="openTasks" >5 Open Tasks</span>
                        <span className="Stars" >
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </span>
                    </div>
                </div>

                <div className="challenges">

                    <h1>Your challenges</h1>

                    <div className="challengeBox" >
                        <div>
                            <p className="title">React JS</p>
                            <span className="close" >Close</span>
                            <p className="description">Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y</p>
                            <span className="creation">Created at 27/12 by Fulano</span>
                            <span className="status">Em andamento</span>
                        </div>

                        <div>
                            <p className="title">React JS</p>
                            <span className="close" >Close</span>
                            <p className="description">Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y</p>
                            <span className="creation">Created at 27/12 by Fulano</span>
                            <span className="status">Em andamento</span>
                        </div>

                        <div>
                            <p className="title">React JS</p>
                            <span className="close" >Close</span>
                            <p className="description">Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade YEstudar React JS até o módulo X para conseguir desenvolver funcionalidade Y
                            Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade YEstudar React JS até o módulo X para conseguir desenvolver funcionalidade Y
                            Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade YEstudar React JS até o módulo X para conseguir desenvolver funcionalidade Y
                            Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade YEstudar React JS até o módulo X para conseguir desenvolver funcionalidade Y
                            Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade YEstudar React JS até o módulo X para conseguir desenvolver funcionalidade Y
                            Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade YEstudar React JS até o módulo X para conseguir desenvolver funcionalidade Y
                            Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y Estudar React JS até o módulo X para conseguir desenvolver funcionalidade YEstudar React JS até o módulo X para conseguir desenvolver funcionalidade Y</p>
                            <span className="creation">Created at 27/12 by Fulano</span>
                            <span className="status">Em andamento</span>
                        </div>

                        <div>
                            <p className="title">React JS</p>
                            <span className="close" >Close</span>
                            <p className="description">Estudar React JS até o módulo X para conseguir desenvolver funcionalidade Y</p>
                            <span className="creation">Created at 27/12 by Fulano</span>
                            <span className="status">Em andamento</span>
                        </div>
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