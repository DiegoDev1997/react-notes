import CardNote from "../../CardNote";
import { NotesList } from "../../data/note";
import { Page } from "./style";

export default function Notes(){
    return <Page>
       <h2>Minhas Anotações</h2>
       <div className="grid-notes">
        {
            NotesList.map((n,k)=><CardNote  note={n} key={k}/>)
        }
       </div>
    </Page>
}