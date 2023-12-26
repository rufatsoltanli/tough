import React, { createContext } from 'react'
import { HeaderContext } from './HeaderContext'

// const MainContext = createContext(MainContext)

function MainProvider({ children }) {
    return (
        <HeaderContext>
            {children}
        </HeaderContext>
    )
}

export default MainProvider