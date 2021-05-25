import React, { createContext, useContext, useState } from 'react'

const HeaderContext = createContext({})

export const HeaderProvider = ({ children }) => {
    const [icon, setIcon] = useState('glass-peq')

    const toggleIcon = (icon) => {
        setIcon(`${icon}`)
    }

    return (
        <HeaderContext.Provider value={{
            icon,
            toggleIcon
        }} >
            { children }
        </HeaderContext.Provider>
    )
}

export default function useIcon() {
    const { icon, toggleIcon } = useContext(HeaderContext)
    
    return [icon, toggleIcon]
}
