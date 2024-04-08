import { Link } from "react-router-dom";
import CardNote from "../../CardNote";
import { NotesList } from "../../data/note";
import { Page } from "./style";

export default function Notes(){
    return <Page>
      <div className="header-page">
      <h2>Minhas Anotações</h2>
      <Link to={'/novaanotacao'}>Nova Anotação</Link>
      </div>
       <div className="grid-notes">
        {
            NotesList.map((n,k)=><CardNote  note={n} key={k}/>)
        }
       </div>
    </Page>
}