import { Routes as Router,Route } from "react-router-dom"
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Notes from "../pages/Notes"


export default function Routes(){
    return <Router>
            <>
            <Route path="/" element={<Home />}/>
            <Route path="/anotacoes" element={<Notes />}/>
            <Route path="/entrar" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            
            </>

      </Router>
}