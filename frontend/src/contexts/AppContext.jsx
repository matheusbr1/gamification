import React, { useState, createContext, useEffect } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const storagedData = localStorage.getItem('@Gamification:data')
    const handleStorageData = () => (storagedData) ? JSON.parse(storagedData) : ''

    const [name, setName] = useState(() => handleStorageData().name)
    const [avatar, setAvatar] = useState(() => handleStorageData().avatar)
    const [ocupation, setOcupation] = useState(() => handleStorageData().ocupation)
    const [challenge, setChallenge] = useState()
    const [challenges, setChallenges] = useState([])

    const Appdata = {
        avatar,
        name,
        ocupation,
        challenges
    }

    useEffect(() => {
        (challenge !== undefined) && (setChallenges([...challenges, challenge]))
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
                setChallenge,
                setChallenges
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider