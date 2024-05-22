import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TranslationsContext } from '../../context/TranslationContext';
import { BsTranslate } from "react-icons/bs";


const MenuButton = styled.input`
  display: none;
`;

const MenuIcon = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: .5rem;
  border-radius: 5px;
  background-color: var(--secundaria);
  &:hover{
    background-color: var(--secundaria-hover);
  }
  cursor: pointer;
`;

const MenuContent = styled.div`
  display: none;
  flex-direction: column;
  background-color: var(--secundaria);
  position: absolute;
  top: 130px;
  right: 90px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  a {
    padding: 10px;
    padding-inline: 20px;
    text-decoration: none;
    color: var(--neutral);
    cursor: pointer;

    &:hover {
    color: var(--neutral-hover);
    }
  }

  ${({ isVisible }) => isVisible && `
    display: flex;
  `}
`;

const LangSelector = () => {
  const { _, setLocale } = useContext(TranslationsContext);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <MenuButton id="menu-btn" type="checkbox" checked={menuVisible} onChange={toggleMenu} />
      <MenuIcon htmlFor="menu-btn">
      <BsTranslate />
      </MenuIcon>
      <MenuContent isVisible={menuVisible}>
        <a onClick={() => setLocale('en')}>English</a>
        <a onClick={() => setLocale('es')}>Español</a>
        <a onClick={() => setLocale('fr')}>Français</a>
        <a onClick={() => setLocale('de')}>Deutsch</a>
        <a onClick={() => setLocale('pt')}>Português</a>
      </MenuContent>
    </div>
  );
};

export default LangSelector;
