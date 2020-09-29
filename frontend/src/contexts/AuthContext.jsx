import React, { createContext, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ApiInterceptor from '../services/apiInterceptor'
import api from '../services/api'
import { useAppData } from './AppContext'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    let history = useHistory();

    const { setUserId, ClearStoragedAppData } = useAppData()

    const storagedToken = localStorage.getItem('@Gamification:auth')

    const handleStorageToken = () => (storagedToken) ? JSON.parse(storagedToken) : ''

    const [token, setToken] = useState(() => handleStorageToken())

    const [Authenticated, setAuthenticated] = useState(false)

    ApiInterceptor(setAuthenticated)

    useEffect(() => console.log('Authenticated:', Authenticated), [Authenticated])

    const SaveToken = token => {
        setToken(token)
        localStorage.setItem('@Gamification:auth', JSON.stringify(token))
    }

    const ClearStoragedToken = () => {
        setToken()
        localStorage.removeItem('@Gamification:auth')
    };

    const signIn = async user => {

        if (!!token) {
            console.log('Token:', token)
            setAuthenticated(true)
            history.push('/dashboard')
        }

        const sign = !!user && await api.post('/auth', user)

        if (!!sign) {
            const { token, userId } = sign.data
            setAuthenticated(true)
            SaveToken(token)
            setUserId(userId)
            history.push('/dashboard')
        }
    }

    const signOut = () => {
        ClearStoragedToken()
        ClearStoragedAppData()
        history.push('/')
    }

    return (
        <AuthContext.Provider value={{
            token,
            SaveToken,
            ClearStoragedToken,
            Authenticated,
            setAuthenticated,
            signIn,
            signOut
        }} >
            { children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}