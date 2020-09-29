import React, { useState, createContext, useEffect, useContext } from 'react'
import api from '../services/api'

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const storagedData = localStorage.getItem('@Gamification:data')
    const handleStorageData = () => (storagedData) ? JSON.parse(storagedData) : ''

    const [userId, setUserId] = useState(() => handleStorageData().userId)
    const [name, setName] = useState(() => handleStorageData().name)
    const [email, setEmail] = useState(() => handleStorageData().email)
    const [password, setPassword] = useState()
    const [avatar, setAvatar] = useState(() => handleStorageData().avatar)
    const [IsCoordinator, setIsCoordinator] = useState(() => handleStorageData().ocupation)
    const [challenge, setChallenge] = useState()
    const [challenges, setChallenges] = useState([])

    const [loading, setLoading] = useState(false)

    const Appdata = {
        userId,
        name,
        email,
        IsCoordinator,
        avatar,
        challenges
    }

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

    const ClearStoragedAppData = () => localStorage.removeItem('@Gamification:data')

    useEffect(() => localStorage.setItem('@Gamification:data', JSON.stringify(Appdata)), [Appdata])

    useEffect(() => (challenge !== undefined) && (setChallenges([...challenges, challenge])), [challenge])

    return (
        <AppContext.Provider
            value={{
                Appdata,
                ClearStoragedAppData,

                CreateUser,

                setUserId,
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

export function useAppData() {
    const context = useContext(AppContext)
    return context
}