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
        display: flex;
        align-items: center;
        
    }
        
    div.content{
        background-color: var(--primaria);
        height: 150px;
        display: flex;
        justify-content: space-between;
        padding-inline: 90px;
        align-items: center;
        padding-block-start: 60px;
    }
    div.box{
        height: 100px;
        background-color: var(--secundaria);
        border-radius: 16px;
        margin-bottom: 20px;
    }
    div.content-downloadlogo{
        margin: 10px;
        
    }
    div.boxlinks{
        background-color: white;
        height: 48px;
        width: 48px;
        border-radius: 13px;
        margin-right: 10px;
    }
    div.content-marcadagua{
        color: var(--neutral);
        display: flex;
        align-items: center;
        padding-inline: 10px;
        margin-bottom: 10px;
    }
    div.marcadagua{
        background-color: var(--neutral);
        height: 48px;
        width: 48px;
        border-radius: 13px;
        margin-right: 10px;
        
    }
    div.text{
        display: flex ;
        flex-direction: column;
    }
    div.content-marcadaguasocials{
        align-items: center;
        flex-direction: column;
        display: flex;
        
    }
        

        
        
        
`




export {FooterStyled}
