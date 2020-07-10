import React, { useCallback } from 'react'

import { Background, Bullet } from '../../styles/global'
import { Container } from './style'

import avatar1 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-01.png'
import avatar2 from '../../assets/Artboards_Diversity_Avatars_by_Netguru-02.png'

function RegisterAvatar() {

    const handleSelectedIcon = useCallback(() => {
        console.log('Selected')
    }, [])

    return (
        <Background>
            <Container>

                <h1>Choose your avatar</h1>

                <div>
                    <img src={avatar1} onClick={handleSelectedIcon} />
                    <img src={avatar2} onClick={handleSelectedIcon} />
                    <img src={avatar1} onClick={handleSelectedIcon} />
                    <img src={avatar2} onClick={handleSelectedIcon} />
                    <img src={avatar1} onClick={handleSelectedIcon} />
                    <img src={avatar2} onClick={handleSelectedIcon} />

                    <img src={avatar1} />
                    <img src={avatar2} />
                    <img src={avatar1} />
                    <img src={avatar2} />
                    <img src={avatar1} />
                    <img src={avatar2} />

                    <img src={avatar1} />
                    <img src={avatar2} />
                    <img src={avatar1} />
                    <img src={avatar2} />
                    <img src={avatar1} />
                    <img src={avatar2} />
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