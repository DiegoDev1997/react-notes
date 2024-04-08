import {  useNavigate } from "react-router-dom";
import Edite from "../assets/svgs/edite";
import Trash from "../assets/svgs/trash";
import { TNote } from "../types";
import { Box } from "./style";
import { toast } from "react-toastify";


export type Props={
    note:TNote
}
export default function CardNote({note}:Props){
    const navigate=useNavigate()

    const deleteNote=()=>{
        toast.success(' anotação deletada')
    }
    return <Box>
        <div className="header-box">
            <h3>{note.title}</h3>
            <p>criada em xx/xx/xxxx</p>
        </div>
        <div className="body-box">
         <p>{note.content}</p>
        </div>
        <div className="tools">
            <span onClick={()=>navigate('/editaranotacao')}><Edite /></span>
           <span onClick={deleteNote}><Trash /></span>
        </div>
    </Box>
}