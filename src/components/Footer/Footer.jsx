import React from "react";
import { FooterStyled} from "./Style";
import { OutlineButton, SecondLineButton } from "../Button/Button";



const Footer = () => (
   <FooterStyled>
   <div className="content">
    <div className="content-marcadagua">
        <div className="marcadagua"></div>
       <div className="text">

        <text>Passeio</text>
        <text>Carioca</text>
       </div>
    </div>
    <div className="content-socials">
        <div className="socials-links">
        <div className="boxlinks"></div>
        <a>Instagram</a>
        </div>
        <div className="socials-links">
        <div className="boxlinks"></div>
        <a>Instagram</a>
        </div>
        
    </div>
        <div className="content-downloadlogo">
        <div className="box"></div>
        <SecondLineButton>Baixe o App</SecondLineButton>
        </div>
    <div className="nav">
        <OutlineButton>Baixe o App</OutlineButton>
        <OutlineButton>Explore</OutlineButton>
        <OutlineButton>Parcerias</OutlineButton>
        <OutlineButton>Fale Conosco</OutlineButton>
    </div>
    
   </div>


   </FooterStyled>

)

export default Footer;