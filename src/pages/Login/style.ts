import styled from "styled-components";
import { GlobalStyle } from "../../global.style";

export const Page=styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
padding: 100px 0;

form{
    display: flex;
    padding: 22px 62px;
    justify-content: center;
    flex-direction: column;
   // border: 1px solid #DEDEDE;
    width: 60%;
    .intro{
        margin: 22px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .cx-img{
            display: flex;
            justify-content: center;
            .svg{
                height: 350px;
                width: 350px;
            }
            .mobile-img{
                display: none;
            }
        }
        
    }
    .inputs{
        display: flex;
       flex-direction: column;
       p{
        font-size:12px;
        color: red;
       }
       input{
        padding: 22px;
        border-radius: 7px;
        border: none;
        margin: 12px 0;
        outline: 1px solid #DEDEDE;
       transition: all ease .3s;
     
        &[type='submit']{
            width: 50%;
            align-self:center;
            color:white;
            background-color: #40A2E3;
            transition: all ease .3s;
            &:hover{
                background-color: #1D24CA;
            }
          
        }
        &.in-focus{
         &:focus{
                 box-shadow: 0 0 2px;
                outline: 1px solid ${GlobalStyle.bgApp};
            }
       }
       }
    }
}

.links{
    display: flex;
    justify-content: center;
    a{
        color: #DEDEDE;
        &:hover{
            color: #40A2E3;
        }
    }
}


@media screen and (max-width:950px){
    align-items: auto;
    height: auto;
    form{
        width: 100%;
        padding: 150px 12px;
        border: none;
        .cx-img{
            
           
            .web-img{
                display: none;
            }
            .mobile-img{
                display: auto;
            }
          
           
        }
    }
}
`