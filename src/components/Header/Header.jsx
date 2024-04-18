import React from "react";
import { HeaderStyled } from "./Style";
import { OutlineButton } from "../Button/Button";





const Header = () => (
   <HeaderStyled>
   <div className="content">
   <h1>
        Passeio Carioca
    </h1>
    <div className="nav">
        <OutlineButton>Baixe o App</OutlineButton>
        <OutlineButton>Explore</OutlineButton>
        <OutlineButton>Parcerias</OutlineButton>
        <OutlineButton>Fale Conosco</OutlineButton>
        
    </div>
   </div>

   </HeaderStyled>

)

export default Header;