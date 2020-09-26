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

    const [IsTokenInvalid, setIsTokenInvalid] = useState(false)

    useEffect(() => {
        console.log(IsTokenInvalid)
    }, [IsTokenInvalid])

    api.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            setIsTokenInvalid(true)
            return error
        }
    })

    return (
        <AuthContext.Provider value={{
            token,
            SaveToken,

        }} >
            { children}
        </AuthContext.Provider>
    )
}

export default AuthProvider