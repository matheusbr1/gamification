import React, { useState, createContext, useEffect } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const storagedData = localStorage.getItem('@Gamification:data')
    const handleStorageData = () => (storagedData) ? JSON.parse(storagedData) : ''

    const [name, setName] = useState(() => handleStorageData().name)
    const [avatar, setAvatar] = useState(() => handleStorageData().avatar)
    const [ocupation, setOcupation] = useState(() => handleStorageData().ocupation)
    const [challenge, setChallenge] = useState()

    const [challenges, setChallenges] = useState([{
        title: 'Estudar React',
        assignee: 'Matheus Baron',
        description: 'Estudar React para nos ajudar a criar os componentes da nova plataforma',
        deadline: '12/12/2021',
        status: 'open',
        requester: 'Fulano',
        createdAt: '2/8/2020'
    }, {
        title: 'Estudar Node',
        assignee: 'Matheus Baron',
        description: 'Estudar node para desenvolver APIs RESTs',
        deadline: '2/1/2021',
        status: 'closed',
        requester: 'Ciclano',
        createdAt: '2/8/2020'
    }])

    const Appdata = {
        avatar,
        name,
        ocupation,
        challenges
    }

    useEffect(() => {
        console.log('add challenge ', challenge)

        if (challenge !== undefined) {
            setChallenges([...challenges, challenge])
        }

    }, [challenge])

    useEffect(() => {
        localStorage.setItem('@Gamification:data', JSON.stringify(Appdata))
    }, [Appdata])

    return (
        <AppContext.Provider
            value={{
                Appdata,
                setAvatar,
                setOcupation,
                setName,
                setChallenge
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider