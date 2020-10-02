import React, { useState, createContext, useEffect } from 'react'
import api from '../services/api'
import { useHistory } from "react-router-dom";

export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const history = useHistory()

    const storagedData = localStorage.getItem('@Gamification:data')
    const handleStorageData = () => (storagedData) ? JSON.parse(storagedData) : ''

    const [userId, setUserId] = useState(() => handleStorageData().userId)
    const [name, setName] = useState(() => handleStorageData().name)
    const [email, setEmail] = useState(() => handleStorageData().email)
    const [avatar, setAvatar] = useState(() => handleStorageData().avatar)
    const [IsCoordinator, setIsCoordinator] = useState(() => handleStorageData().IsCoordinator)
    const [password, setPassword] = useState()
    const [stars, setStars] = useState()
    const [challenge, setChallenge] = useState()
    const [challenges, setChallenges] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!!userId) {
            api.get(`users/${userId}`).then(response => {
                console.log(response.data)
                setName(response.data.name)
                setAvatar(response.data.avatar)
                setStars(response.data.stars)
                setIsCoordinator(response.data.coordinator)
            })
        }
    }, [userId])

    const Appdata = {
        userId,
        name,
        email,
        IsCoordinator,
        avatar,
        stars,
        challenges
    }

    const ClearStoragedAppData = () => localStorage.removeItem('@Gamification:data')

    const CreateUser = async (avatarSelected) => {

        const user = {
            name,
            email,
            password,
            coordinator: IsCoordinator,
            avatar: avatarSelected
        }

        console.log('User Data', user)

        const response = await api.post('users', user)

        console.log(response)

        history.push('/')
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