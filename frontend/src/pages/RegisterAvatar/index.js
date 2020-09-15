import React, { useCallback, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { Background, Bullet } from '../../styles/global'
import { Container } from './style'

import avatar1 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-01.png'
import avatar2 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-02.png'
import avatar3 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-03.png'
import avatar4 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-04.png'
import avatar5 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-05.png'
import avatar6 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-06.png'
import avatar7 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-07.png'
import avatar8 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-08.png'
import avatar9 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-09.png'
import avatar10 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-10.png'
import avatar11 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-11.png'
import avatar12 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-12.png'
import avatar13 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-13.png'
import avatar14 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-14.png'
import avatar15 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-15.png'
import avatar16 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-16.png'
import avatar17 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-17.png'
import avatar18 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-18.png'

import { AppContext } from '../../contexts/AppContext'

function RegisterAvatar() {

    const Avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18]

    const history = useHistory()

    const { setAvatar } = useContext(AppContext)

    const handleSelectedIcon = useCallback(avatarSelected => {
        setAvatar(avatarSelected)
        history.push('/dashboard')
    }, [])

    return (
        <Background>
            <Container>
                <h1>Choose your avatar</h1>

                <div className='avatars' >
                    {Avatars.map(avatar => <img
                        key={avatar}
                        src={avatar}
                        onClick={() => handleSelectedIcon(avatar)}
                    />)}
                </div>

                <div className="bullets">
                    <Bullet>*</Bullet>
                    <Bullet>*</Bullet>
                    <Bullet>*</Bullet>
                </div>

            </Container>
        </Background>
    )
}

export default RegisterAvatar