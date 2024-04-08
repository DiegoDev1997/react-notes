import { Link } from "react-router-dom";
import { Page } from "./style";
import Loginmobile from "../../assets/loginmobile";
import Loginweb from "../../assets/loginweb";
import * as y from 'yup'
import { useFormik } from "formik";

const schema=y.object({
    name:y.string().trim().required('Campo obrigatório'),
   email:y.string().email('Email inválido').trim().required('Preencha o campo'),
   password:y.string().min(5,'minimo 5 caracteres').max(12,'Máximo 11 caracteres').trim().required('Preencha o campo') 
})



export default function Login(){

    const formik=useFormik({
        initialValues:{name:'',email:'',password:''},
        validationSchema:schema,
        onSubmit:(values,{resetForm})=>{
            console.log(values);
            resetForm()
        }
    })

    return <Page>
        <form action="" onSubmit={formik.handleSubmit}>
        <div className="intro">
            <div className="cx-img">
                <Loginmobile />
                 <Loginweb />
            </div>
            
         <h2>Cadastrar</h2>
         <p>Preencha os campos para criar a sua conta </p>
        </div>
        <div className="inputs">
        <label htmlFor="">Nome</label>
            <input className="in-focus" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
            {formik.touched.name && <p>{formik.errors.name}</p>}
            <label htmlFor="">Email</label>
            <input className="in-focus" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            {formik.touched.email && <p>{formik.errors.email}</p>}
            <label htmlFor="">Senha</label>
            <input name="password" onChange={formik.handleChange} value={formik.values.password} type="password" />
            {formik.touched.password && <p>{formik.errors.password}</p>}
            <input type="submit" />
        </div>
        <div className="links">
            <Link to='/entrar'>Já te uma conta? Clique aqui</Link>
        </div>

        </form>
    </Page>
}