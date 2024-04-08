import styled from "styled-components";
import { GlobalStyle } from "../global.style";


export const Box=styled.div`
outline: 1px solid  #DEDEDE;
border-radius: 7px;

.header-box{
    padding: 8px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: ${GlobalStyle.bgTheme};
    h3{
        font-size: 15px;
    }
    p{
        font-size: 12px;
        color: #DEDEDE;
    }
}
.body-box{
    padding: 12px;
    max-height: 400px;
    p{
        font-size:13px;
        color: grey;
    }
}

.tools{
    padding: 12px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .svg{
        height: 35px;
        margin: 0 12px;
        stroke: #DEDEDE;
        stroke-width: 0.1px;
        cursor: pointer;
        transition: all ease .2s;
        &:hover{
            
            stroke: ${GlobalStyle.bgTheme};
        }
    }
}
&:hover{
    box-shadow: 0 0 12px #222;
    transition: all ease .3s;
    .body-box{
       p{
        color: white;
       }
        background-color:${GlobalStyle.bgApp};
    }
}

@media screen and (max-width:750px){
width: 100%;
}
`