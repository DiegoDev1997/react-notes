import Edite from "../assets/svgs/edite";
import Trash from "../assets/svgs/trash";
import { TNote } from "../types";
import { Box } from "./style";


export type Props={
    note:TNote
}
export default function CardNote({note}:Props){
    return <Box>
        <div className="header-box">
            <h3>{note.title}</h3>
            <p>criada em xx/xx/xxxx</p>
        </div>
        <div className="body-box">
         <p>{note.content}</p>
        </div>
        <div className="tools">
            <Edite />
            <Trash />
        </div>
    </Box>
}