import styled from "styled-components";
import { GlobalStyle } from "../../global.style";

export const HeaderBox=styled.header`
background-color: blue;
display: flex;
justify-content: space-around;
align-items: center;
padding: 30px;


.left{
    color:${GlobalStyle.bgApp};
    font-size: 23px;
}
.right{
    display: flex;
    align-items: center;
    a{
        color: white;
        margin: 0 12px;
        transition: all ease .3s;
        &:hover{
            color:${GlobalStyle.bgApp};
            text-decoration: underline;
            
        }
    }
}

@media screen and (max-width:950px){
.right{
    display: none;
}
}

`