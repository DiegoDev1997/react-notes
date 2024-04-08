import { createContext, ReactNode, useEffect, useState } from "react";
import { TUser } from "../types";


type Props={
    children:ReactNode
}
type TContext={
    user:TUser | null,
    token:string | null
}
export const context=createContext<TContext>({} as TContext)

export const ContextProvider=({children}:Props)=>{
 const [user,setUser]=useState<TUser | null>(null)
 const [token,setToken]=useState<string | null>(null)

useEffect(()=>{
    const userStorage=localStorage.getItem('@u')
    const tokenStorage=localStorage.getItem('@tk')
    if(userStorage !== undefined && tokenStorage !== undefined){
        const parseUser=JSON.parse(userStorage as string)
        const tokenUser=JSON.parse(tokenStorage as string)
        setUser(parseUser)
        setToken(tokenUser)
    }

},[])



    return <context.Provider value={{user,token}}>
        {children}
    </context.Provider>
}