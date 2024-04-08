import styled from "styled-components";


export const Page=styled.div`
display: flex;
padding: 100px 50px;
flex-direction: column;
.grid-notes{
    display: grid;
    gap: 12px;
    margin: 50px 0;
    grid-template-columns: repeat(4,1fr);
}


@media screen and (max-width:750px){
    padding: 100px 12px;
    .grid-notes{
        display: flex;
        flex-direction: column;
    }
}

@media screen and (min-width:760px) and (max-width:950px){
    .grid-notes{
    display: grid;
    gap: 12px;
    margin: 50px 0;
    grid-template-columns: repeat(3,1fr);
}
}
`