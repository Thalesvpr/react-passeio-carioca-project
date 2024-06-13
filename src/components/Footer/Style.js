import styled from "styled-components";

const ModalStyled = styled.div`

background: rgba(0, 0, 0, 0.4);
width: 100%;
height: 100%;
position: fixed;
z-index: 20;
top: 0;
div.modal {
   
 }
 `

const FooterStyled = styled.article`
    height: 300px;
    width: 100%;
    position: absolute;
    
    z-index: 100;
    div.content-socials{
        color: white;
        
        
    }
    div.nav{
        display: flex;
        padding-right: 100px;
        gap: 30px
        
    }
    div.socials-links{
        margin: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        line-height: 0;
        margin-bottom: 0;
    }
    
    div.content{
        
        background-image: url("imagens/svg/footerbg.png");
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
        margin: 20px auto;
        width: 100%;
        max-width:116px;

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
    .link {
  color: white;
  text-decoration: none; 
}
    .logo {
        height: 134px;
        width: auto;
        margin-bottom: 25px;
    }
     .modalfooter {
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 20;
        top: 0;
     }
        
`




export {FooterStyled,ModalStyled}
