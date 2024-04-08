import { ReactNode, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { context } from "../context"

type Props={
    children:ReactNode
}

export default ({children}:Props)=>{
    const {user,token}=useContext(context)
    const navigate=useNavigate()

   if(!user && !token){
    navigate('/')
   }
   return children

}