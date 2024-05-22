import { HeaderStyled } from "./Style";
import { OutlineButton } from "../Button/Button";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import LangSelector from "../LangSelector/LangSelector";

export const ContentLogo = styled.div`
 @media (max-width: 768px) {
    display: block; 
  }
`

export const BurguerButtom = styled.div`
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: none;
  @media (max-width: 768px) {
    display: block; 
  }
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
  padding-inline: 15px;
  padding-block: 30px;
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
        <OutlineButton>Baixe o App</OutlineButton>
        <OutlineButton>Explore</OutlineButton>
        <OutlineButton>Parcerias</OutlineButton>
        <OutlineButton>Fale Conosco</OutlineButton>
        <LangSelector/>
        </Nav>
        <BurguerButtom onClick={toggleNav}>
          <div className="burguer-buttom">
            <OutlineButton></OutlineButton>
          </div>
        </BurguerButtom>
      </div>
    </HeaderStyled>
  );
}

 

export default Header;
  