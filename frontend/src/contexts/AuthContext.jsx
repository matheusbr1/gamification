import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const storagedToken = localStorage.getItem('@Gamification:auth')
    const handleStorageToken = () => (storagedToken) ? JSON.parse(storagedToken) : ''

    const [token, setToken] = useState(() => handleStorageToken())

    const SaveToken = token => {
        setToken(token)
        localStorage.setItem('@Gamification:auth', JSON.stringify(token))
    }

    const ClearStoragedToken = () => localStorage.removeItem('@Gamification:auth');

    const [Authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        console.log('Authenticated:', Authenticated)
    }, [Authenticated])

    api.interceptors.response.use(response => {
        return response;
    }, error => {
        const response = error.response
        if (response.status === 400) {
            alert(`Error: ${response.data.message}`)
        }
        if (response.status !== 400 && response.status !== 401 && response.status !== 403) {
            setAuthenticated(true)
        }
    })

    return (
        <AuthContext.Provider value={{
            token,
            SaveToken,
            ClearStoragedToken,
            Authenticated,
            setAuthenticated,
        }} >
            { children}
        </AuthContext.Provider>
    )
}

export default AuthProvider