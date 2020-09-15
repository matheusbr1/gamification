import React, { useState, createContext } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const storagedData = localStorage.getItem('@Gamification:data')
    const handleStorageData = () => (storagedData) ? JSON.parse(storagedData) : ''

    const [name, setName] = useState(() => handleStorageData().name)
    const [avatar, setAvatar] = useState(() => handleStorageData().avatar)
    const [ocupation, setOcupation] = useState(() => handleStorageData().ocupation)

    return (
        <AppContext.Provider
            value={{
                avatar,
                setAvatar,
                ocupation,
                setOcupation,
                name,
                setName
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider