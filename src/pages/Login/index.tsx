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
            
         <h2>Entrar</h2>
         <p>Preencha os campos para entrar</p>
        </div>
        <div className="inputs">
            <input className="in-focus" type="text" />
            <input className="in-focus" type="text" />
            <input type="submit" />
        </div>
        <div className="links">
            <Link to='/cadastro'>Criar conta</Link>
        </div>

        </form>
    </Page>
}