import React from 'react'

import { Background, Bullet } from '../../styles/global'
import avatar from '../../assets/Artboards_Diversity_Avatars_by_Netguru-01.png'
import { Container } from './style'

function Dashboard() {
    return (
        <Background>
            <Container>

                <div className="userDetails">
                    <img src={avatar} />
                    <div>
                        <p>Matheus Baron Ribeiro</p>
                        <span className="openTasks" >5 Open Tasks</span>
                        <span className="Stars" >Stars</span>
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