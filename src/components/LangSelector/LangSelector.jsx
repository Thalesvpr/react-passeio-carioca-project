import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TranslationsContext } from '../../context/TranslationContext';
import { MdOutlineTranslate } from 'react-icons/md';

const MenuButton = styled.input`
  display: none;
`;

const MenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MenuIcon = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .5rem;
  border-radius: 5px;
  background-color: var(--secundaria);
  &:hover {
    background-color: var(--secundaria-hover);
  }
  cursor: pointer;
  color: var(--neutral);
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
  const { locale, setLocale } = useContext(TranslationsContext);
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

  const getLanguageName = (locale) => {
    switch (locale) {
      case 'en': return 'English';
      case 'es': return 'Español';
      case 'fr': return 'Français';
      case 'de': return 'Deutsch';
      case 'pt': return 'Português';
      default: return '';
    }
  };

  return (
    <div ref={menuRef}>
      <MenuButton id="menu-btn" type="checkbox" checked={menuVisible} onChange={toggleMenu} />
      <MenuStyled>
        <MenuIcon htmlFor="menu-btn">
          <MdOutlineTranslate />
        </MenuIcon>
        <span>{getLanguageName(locale)}</span>
      </MenuStyled>

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
