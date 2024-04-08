import { string } from "yup"


export type TNote={
    id:number,
    title:string,
    content:string
}


export type TUser={
    id:number,
    name:string,
    email:string,
    password:string
}