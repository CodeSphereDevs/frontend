/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react'

const userContext = createContext();

export default function UserContext({children}) {
    const [user, setUser ] = useState(null);
  return (
    <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
  )
}

export const useUserContext = () => useContext(userContext);