import React, { useState, createContext, useEffect } from 'react'
import api from '../services/api'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const storagedData = localStorage.getItem('@Gamification:data')
    const handleStorageData = () => (storagedData) ? JSON.parse(storagedData) : ''

    const [name, setName] = useState(() => handleStorageData().name)
    const [email, setEmail] = useState(() => handleStorageData().email)
    const [password, setPassword] = useState()
    const [avatar, setAvatar] = useState(() => handleStorageData().avatar)
    const [IsCoordinator, setIsCoordinator] = useState(() => handleStorageData().ocupation)
    const [challenge, setChallenge] = useState()
    const [challenges, setChallenges] = useState([])

    const [loading, setLoading] = useState(false)

    const Appdata = {
        name,
        email,
        IsCoordinator,
        avatar,
        challenges
    }

    const ClearStoragedAppData = () => localStorage.removeItem('@Gamification:data')

    const CreateUser = async () => {

        const user = {
            name,
            email,
            password,
            IsCoordinator,
            avatar
        }

        const userCreated = await api.post('/users', user)
        console.log(userCreated)
    }

    useEffect(() => {
        localStorage.setItem('@Gamification:data', JSON.stringify(Appdata))
    }, [Appdata])

    useEffect(() => {
        (challenge !== undefined) && (setChallenges([...challenges, challenge]))
    }, [challenge])

    return (
        <AppContext.Provider
            value={{
                Appdata,
                ClearStoragedAppData,

                CreateUser,

                setName,
                setEmail,
                setPassword,
                setIsCoordinator,
                setAvatar,

                setChallenge,
                setChallenges,

                loading,
                setLoading
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider