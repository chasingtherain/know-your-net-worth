import { useContext } from 'react'
import NetWorthContext from '../contexts/NetWorthContext'


export const useNetWorthContext = () => {
    const netWorthContext = useContext(NetWorthContext)

    if (!netWorthContext) {throw Error("useNetWorthContext must be inside NetWorthContextProvider")}

    return netWorthContext
}