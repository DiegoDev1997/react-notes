import { Page } from "./style";
import * as y from 'yup'
import { useFormik } from "formik";
import { toast } from "react-toastify";

const schema=y.object({
   title:y.string().max(100).trim().required('Preencha o campo'),
   content:y.string().min(5,'minimo 5 caracteres').max(900,'Máximo 11 caracteres').trim().required('Preencha o campo') 
})


export default function(){

    const formik=useFormik({
        initialValues:{title:'',content:''},
        validationSchema:schema,
        onSubmit:(values,{resetForm})=>{
            console.log(values)
            resetForm()
            toast.success(' anotação atualizada')
            
        }
    })


    return <Page>
    <form action="" onSubmit={formik.handleSubmit}>
    <div className="intro">
      
        
     <h2>Editar Anotação</h2>
     <p>Altere os campos para editar a anotação</p>
    </div>
    <div className="inputs">
         <label htmlFor="title">Titulo</label>
        <input id="title" className="in-focus" name="title" type="text" onChange={formik.handleChange} value={formik.values.title} />
        {formik.touched.title && <p>{formik.errors.title}</p>}
        <label htmlFor="content">Conteúdo</label>
        <textarea name="content" onChange={formik.handleChange} value={formik.values.content} id="content" className="in-focus">
        {formik.values.content}
        </textarea>
        {formik.touched.content && <p>{formik.errors.content}</p>}
        <input type="submit" value={'atualizar'} />
    </div>
   

    </form>
</Page>
}