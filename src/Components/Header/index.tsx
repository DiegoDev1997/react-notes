import { Link } from "react-router-dom"
import { HeaderBox } from "./style"


export default function Header(){
    return <HeaderBox>
        <div className="left">
            <p>ReactNotes</p>
        </div>
        <div className="right">
            <Link to={'/'}>Inicio</Link>
           <Link to={'/cadastro'}>Criar conta</Link>
            <Link to={'/entrar'}>Entrar</Link>
            <Link to={'/anotacoes'}>Anotações</Link>

        </div>
    </HeaderBox>
}