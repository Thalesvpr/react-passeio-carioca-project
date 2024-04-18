import styled from "styled-components";

const FooterStyled = styled.article`
    height: 300px;
    width: 100%;
    background-color: var(--primaria);
    z-index: 10;
    div.content-socials{
        color: white;
       
    }
    div.nav{
        display: flex;
        
    }
    div.socials-links{
        margin: 10px;
        
    }
    div.content{
        background-color: var(--primaria);
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding: 50px;
        align-items: center;
    }
    div.box{
        height: 100px;
        background-color: white;
        border-radius: 16px;
        margin-bottom: 20px;
    }
    div.content-downloadlogo{
        margin: 10px;
        
    }
    div.boxlinks{
        background-color: white;
    }
        
`




export {FooterStyled}
