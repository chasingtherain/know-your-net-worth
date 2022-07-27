import React, { createContext } from 'react'

export const NetWorthContext = createContext()

export const NetWorthContextProvider = ({children}) => {

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    return (
        <NetWorthContext.Provider value={{
                formatter
            }}>
            {children}
        </NetWorthContext.Provider>
    )
}

export default NetWorthContext