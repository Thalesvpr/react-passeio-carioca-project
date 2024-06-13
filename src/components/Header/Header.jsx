import { HeaderStyled } from "./Style";
import { NeutralButton, OutlineButton } from "../Button/Button";
import styled from "styled-components";
import React, { useState, useEffect, useContext, useRef } from 'react';
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
  
  const scrollToSection = (sectionId) => {
    console.log("entrou")
  const section = document.getElementById(sectionId);
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      console.log("correto")
      
    }
  };

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
    Inicio:"Home",
    Explore: "Explore",
    Parcerias: "Partners",
    FaleConosco: "Contact Us",
    BaixeoApp: "Download App",
    Gameficacao:"Gamification",
    Passeios: "Tours",
    Anunciantes: "Advertisers"

  },
  pt: {
    Inicio: "Inicio",
    Explore: "Explore",
    Parcerias: "Parcerias",
    FaleConosco: "Fale Conosco",
    BaixeoApp: "Baixe o App",
    Gameficacao: "Gameficação",
    Passeios: "Passeios",
    Anunciantes: "Anunciantes"
  },
  de: {
    Inicio:"Anfang ",
    Explore: "Erkunden",
    Parcerias: "Partner",
    FaleConosco: "Kontaktieren Sie uns",
    BaixeoApp: "App herunterladen",
    Gameficacao:"Gamifizierung",
    Passeios: "Touren",
    Anunciantes: "Werbetreibende"
  },
  fr: {
    Inicio:"Début ",
    Explore: "Explorer",
    Parcerias: "Partenaires",
    FaleConosco: "Contactez-nous",
    BaixeoApp: "Télécharger l'application",
    Gameficacao:"Gamification",
    Passeios: "Tours",
    Anunciantes: "Annonceurs"
  },
  es: {
    Inicio:"Inicio",
    Explore: "Explorar",
    Parcerias: "Socios",
    FaleConosco: "Contáctanos",
    BaixeoApp: "Descargar la App",
    Gameficacao:"Gamificación",
    Passeios: "Paseos",
    Anunciantes: "Anunciantes"
  }
}

const texts = translations[locale];

return (
  <HeaderStyled>
    <div className="content">
      <div>
        <Menu className="content-logo" isVisible={isMenuVisible}>
          <img className="logo" src={`${process.env.PUBLIC_URL}imagens/png/LOGO.png`} alt="Logo" />
          <h1>Passeio Carioca</h1>
        </Menu>
      </div>
      <Nav isNavOpen={isNavOpen}>
        {!isMenuVisible ? <OutlineButton onClick={() => scrollToSection('hero')}>{texts.Inicio}</OutlineButton>:""}
        <OutlineButton onClick={() => scrollToSection('explore')}>{texts.Explore}</OutlineButton>
        <OutlineButton onClick={() => scrollToSection('gameficacao')}>{texts.Gameficacao}</OutlineButton>
        <OutlineButton onClick={() => scrollToSection('passeios')}>{texts.Passeios}</OutlineButton>
        <OutlineButton onClick={() => scrollToSection('anunciantes')}>{texts.Anunciantes}</OutlineButton>
        <OutlineButton onClick={() => scrollToSection('faleconosco')}>{texts.FaleConosco}</OutlineButton>

        <NeutralButton onClick={() => scrollToSection('baixeoapp')}>{texts.BaixeoApp}</NeutralButton>
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
  