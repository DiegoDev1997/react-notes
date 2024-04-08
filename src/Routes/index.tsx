import { Routes as Router,Route } from "react-router-dom"
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Notes from "../pages/Notes"
import NovaAnotacao from "../pages/NovaAnotacao"
import EditarAnotacao from "../pages/EditarAnotacao"
import PrivateRoute from "../PrivateRoute"
import Conta from "../pages/Conta"



export default function Routes(){
          
    return <Router>
            <>
                  <Route path="/" element={<Home />}/>
                  <Route path="/anotacoes" element={<PrivateRoute><Notes /></PrivateRoute>}/>
                  <Route path="/novaanotacao" element={<PrivateRoute><NovaAnotacao /></PrivateRoute>}/>
                  <Route path="/conta/:usuario" element={<PrivateRoute><Conta /></PrivateRoute>}/>
                  <Route path="/editaranotacao" element={<PrivateRoute><EditarAnotacao /></PrivateRoute>}/>
                  <Route path="/entrar" element={<Login />}/>
                  <Route path="/cadastro" element={<Cadastro/>}/>
            </>

      </Router>
}