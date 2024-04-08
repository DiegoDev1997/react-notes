import { Page } from "./style";


export default function(){
    return <Page>
    <form action="">
    <div className="intro">
      
        
     <h2>Editar Anotação</h2>
     <p>Altere os campos para editar a anotação</p>
    </div>
    <div className="inputs">
        <label htmlFor="title">Titulo</label>
        <input id="title" className="in-focus" type="text" />
        <label htmlFor="content">Conteúdo</label>
        <textarea id="content" className="in-focus">
            
        </textarea>
        <input type="submit" value={'atualizar'} />
    </div>
   

    </form>
</Page>
}