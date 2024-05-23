import { HeaderStyled } from "./Style";
import { NeutralButton, OutlineButton } from "../Button/Button";
import styled from "styled-components";
import React, { useState, useEffect, useContext } from 'react';
import LangSelector from "../LangSelector/LangSelector";
import { BiMenu } from "react-icons/bi";
import { IoMenu, IoMenuOutline } from "react-icons/io5";
import { TranslationsContext } from "../../context/TranslationContext";


export const ContentLogo = styled.div`
@media (max-width: 768px) {
    display: block; 
  }
`

export const BurguerButtom = styled.div`
  transition: opacity 0.3s ease, visibility 0.3s ease;
  color: var(--primaria);
  padding: .7rem;
  border-radius: 5px;
  background-color: var(--neutral);
  display: none;
  @media (max-width: 768px) {
    display: flex; 
  }
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px; 
  cursor: pointer;
  font-size: 2rem;
`;

const Menu = styled.div`
  /* position: fixed; */
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  transition: all 1s ease;
`;

export const Nav = styled.div`
  background-color: var(--destaque);
  padding: 10px;
  padding-inline: 30px;
  padding-block: 15px;
  border-radius: 20px;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  @media (max-width: 768px) {
    display: ${({ isNavOpen }) => isNavOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: absolute;
    right: 25px;
    bottom: -200px; 
  }
  display: flex;
  gap: 20px;
`;


  const Header = () => {
    
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [isNavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setMenuVisible(false);
      } else {
        setMenuVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const {locale}= useContext(TranslationsContext);

const translations = {
  en: {
    Explore: "Explore",
    Parcerias: "Partners",
    FaleConosco: "Contact Us",
    BaixeoApp: "Download App",
  },
  pt: {
    Explore: "Explore",
    Parcerias: "Parcerias",
    FaleConosco: "Fale Conosco",
    BaixeoApp: "Baixe o App",
  }
}

const texts = translations[locale];

  return (
    <HeaderStyled>
      <div className="content">
        <div>
          <Menu className="content-logo" isVisible={isMenuVisible}>
            <img className="logo" src={`${process.env.PUBLIC_URL + "imagens/png/LOGO.png"}`} />
            <h1>Passeio Carioca</h1>
          </Menu>
        </div>
        <Nav isNavOpen={isNavOpen}>
        <OutlineButton>{texts.Explore}</OutlineButton>
        <OutlineButton>{texts.Parcerias}</OutlineButton>
        <OutlineButton>{texts.FaleConosco}</OutlineButton>
        <NeutralButton>{texts.BaixeoApp}</NeutralButton>
        <LangSelector/>
        </Nav>
        <BurguerButtom onClick={toggleNav}>
          <IoMenuOutline />
        
        </BurguerButtom>
      </div>
    </HeaderStyled>
  );
}



export default Header;
  