import { useContext, useState } from "react"
import { Page } from "./style"
import * as y from 'yup'
import { useFormik } from "formik";
import { context } from "../../context";


const schema=y.object({
    name:y.string().trim().required('Campo obrigatório'),
   email:y.string().email('Email inválido').trim().required('Preencha o campo'),
   password:y.string().min(5,'minimo 5 caracteres').max(12,'Máximo 11 caracteres').trim().required('Preencha o campo') 
})


export default ()=>{
    const [edite,setEdite]=useState(false)
    const {user}=useContext(context)


    const formik=useFormik({
        initialValues:{
            name:user ? user.name :'',
            email:user ? user.email : '',
           password:user ? user.password : ''
        },
        validationSchema:schema,
        onSubmit:(values,{resetForm})=>{
            console.log(values);
            resetForm()
        }
    })

    return <Page>
        <form action="" onSubmit={formik.handleSubmit}>
        <div className="intro">
            
            
         <h2>Meus Dados</h2>
         
        </div>
        <div className="inputs">
        <label htmlFor="">Nome</label>
            <input disabled={!edite ? true : false} className="in-focus" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
            {formik.touched.name && <p>{formik.errors.name}</p>}
            <label htmlFor="">Email</label>
            <input disabled={!edite ? true : false} className="in-focus" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            {formik.touched.email && <p>{formik.errors.email}</p>}
            <label htmlFor="">Senha</label>
            <input disabled={!edite ? true : false} className="in-focus" name="password" onChange={formik.handleChange} value={formik.values.password} type="password" />
            {formik.touched.password && <p>{formik.errors.password}</p>}
            {
                !edite ?  <input onClick={()=>setEdite(true)} type="button" value={'Editar'}/> : <input type="submit" value={'Atualizar'}/>
            }
        </div>
    
        </form>
    </Page>
}