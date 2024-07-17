import { useEffect } from 'react';
import { useState, createContext, useContext } from 'react'

const userContext = createContext();

export default function UserContext({children}) {
    const [user, setUser ] = useState(JSON.parse(localStorage.getItem("codeSphere-user") ?? "null"));

    useEffect(()=>{
      localStorage.setItem("codeSphere-user", JSON.stringify(user));
    },[user]);

    
    return (
    <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
  )
}

export const useUserContext = () => useContext(userContext);