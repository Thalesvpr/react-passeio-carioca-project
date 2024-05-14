import styled from "styled-components";


const FooterStyled = styled.article`
    height: 300px;
    width: 100%;
    
    
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
        
        background-image: url("/imagens/svg/footerbg.png");
        background-size: cover;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        padding-bottom: 90px;
        
        
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
        background-color: none;
        height: 48px;
        width: 48px;
        border-radius: 13px;
        margin-right: 10px;
    }
    div.content-marcadagua{
        color: var(--neutral);
        display: flex;
        align-items: center;
        padding-right: 20px;
        margin-bottom: 40px;
    }
    div.marcadagua{
        font-size: 40px;
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

    .insta {
        margin-bottom: 4px;
        
    }
        

        
        
        
`




export {FooterStyled}
