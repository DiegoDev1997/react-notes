import { Link } from "react-router-dom"
import { HeaderBox } from "./style"
import { useContext } from "react"
import { context } from "../../context"


export default function Header(){
    const {user}=useContext(context)


    return <HeaderBox>
        <div className="left">
            <p>ReactNotes</p>
        </div>
        <div className="right">
           {user === null && <>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/cadastro'}>Criar conta</Link>
            <Link to={'/entrar'}>Entrar</Link>
           
           </>}
           {
            user &&  <>
            <Link to={'/anotacoes'}>Anotações</Link>
            <Link to={'/novaanotacao'}>Nova Anotação</Link>
            <Link to={`/conta/${user.name}`}>Meus dados</Link>
            </>
           }

        </div>
    </HeaderBox>
}