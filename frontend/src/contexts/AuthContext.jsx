import React, { createContext, useState, useEffect, useContext, useCallback } from 'react'
import api from '../services/api'
import { AppContext } from "./AppContext";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const history = useHistory()

    const storagedToken = localStorage.getItem('@Gamification:auth')
    const handleStorageToken = () => (storagedToken) ? JSON.parse(storagedToken) : ''

    const [token, setToken] = useState(() => handleStorageToken())

    const SaveToken = token => {
        setToken(token)
        localStorage.setItem('@Gamification:auth', JSON.stringify(token))
    }

    const ClearStoragedToken = () => localStorage.removeItem('@Gamification:auth');

    const [Authenticated, setAuthenticated] = useState(!!token ? true : false)

    useEffect(() => {
        console.log('Authenticated:', Authenticated)
    }, [Authenticated])

    api.interceptors.response.use(response => {
        return response;
    }, error => {
        const response = error.response

        if (!!response) {
            if (response.status === 400) {
                alert(`Error: ${response.data.message}`)
            }
            if (response.status !== 400 && response.status !== 401 && response.status !== 403) {
                setAuthenticated(true)
            }
        } else {
            return alert('Error')
        }

    })

    const { ClearStoragedAppData } = useContext(AppContext)

    const logOut = () => {
        setToken()
        setAuthenticated(false)
        ClearStoragedAppData()
        ClearStoragedToken()
        return history.push('/')
    }

    return (
        <AuthContext.Provider value={{
            token,
            SaveToken,
            ClearStoragedToken,
            Authenticated,
            setAuthenticated,
            logOut
        }} >
            { children}
        </AuthContext.Provider>
    )
}

export default AuthProvider