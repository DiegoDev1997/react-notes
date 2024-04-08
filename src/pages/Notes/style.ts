import styled from "styled-components";


export const Page=styled.div`
display: flex;
padding: 100px 50px;
flex-direction: column;
.header-page{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 50px 0;
    a{
        width: 160px;
        padding: 12px;
        border-radius: 5px;
        align-self:center;
        color:white;
        background-color: #40A2E3;
        transition: all ease .3s;
        &:hover{
            background-color: #1D24CA;
        }
    }
}
.grid-notes{
    display: grid;
    gap: 12px;
    margin: 50px 0;
    grid-template-columns: repeat(4,1fr);
}


@media screen and (max-width:750px){
    padding: 100px 12px;
    .header-page{
        flex-direction: column;
        a{
            margin: 12px 0;
        }
    }
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