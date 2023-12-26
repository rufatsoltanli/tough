import React, { createContext } from 'react'

export const HeaderContext = createContext();

function HeaderProvider({ children }) {
    return (
        <HeaderContext.Provider>
            {children}
        </HeaderContext.Provider>
    )
}

export default HeaderProvider