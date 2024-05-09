import { HeaderStyled } from "./Style";
import { OutlineButton } from "../Button/Button";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';



const Menu = styled.div`
  /* position: fixed; */
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  transition: all 1s ease;
`;

const Header = () => {

    const [isMenuVisible, setMenuVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 0) {
            console.log(false)
          setMenuVisible(false);
        } else {
            console.log(true)

          setMenuVisible(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


   return <HeaderStyled>
   <div className="content">
        <div>
        <Menu className="content-logo" isVisible={isMenuVisible}>
    <img className="logo" src={`${process.env.PUBLIC_URL + "imagens/png/LOGO.png"}`}/>
   <h1>
        Passeio Carioca
    </h1>
    </Menu>
        </div>
    <div className="nav">
        <OutlineButton>Baixe o App</OutlineButton>
        <OutlineButton>Explore</OutlineButton>
        <OutlineButton>Parcerias</OutlineButton>
        <OutlineButton>Fale Conosco</OutlineButton>
        
    </div>
   </div>

   </HeaderStyled>

}

export default Header;