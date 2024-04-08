import { Link } from "react-router-dom";
import { Page } from "./style";
import Loginmobile from "../../assets/loginmobile";
import Loginweb from "../../assets/loginweb";

export default function Login(){
    return <Page>
        <form action="">
        <div className="intro">
            <div className="cx-img">
                <Loginmobile />
                 <Loginweb />
            </div>
            
         <h2>Cadastrar</h2>
         <p>Preencha os campos para criar a sua conta </p>
        </div>
        <div className="inputs">
            <input className="in-focus" type="text" />
            <input className="in-focus" type="text" />
            <input className="in-focus" type="text" />
            <input type="submit" />
        </div>
        <div className="links">
            <Link to='/entrar'>Já te uma conta? Clique aqui</Link>
        </div>

        </form>
    </Page>
}