import React, { useState, useEffect, useContext } from "react";
import { FooterStyled, ModalStyled } from "./Style";
import { OutlineButton, NeutralButton } from "../Button/Button";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { TranslationsContext } from "../../context/TranslationContext";
import { createGlobalStyle } from "styled-components";
import Modal from './../Modal/Modal';
import Privacidade from "../Privacidade/Privacidade";
import Politicas from './../Politicas/Politicas';



const Footer = () => {
  const GlobalStyles = createGlobalStyle`
  body.modal-open {
    overflow: hidden;
  }
`;
const [modalOpen, setModalOpen] = useState(false);
const [modalPOpen, setModalPOpen] = useState(false);

const openModal = () => {
  setModalOpen(true)
}
const closeModal = () => {
  setModalOpen(false)
}
const openPModal = () => {
  setModalPOpen(true)
}
const closePModal = () => {
  setModalPOpen(false)
}



const stopPropagation = (event) => {
  event.stopPropagation();
};

  const scrollToSection = (sectionId) => {
    console.log("entrou")
  const section = document.getElementById(sectionId);
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      console.log("correto")
      
    }
  };

  const {locale}= useContext(TranslationsContext);

  const translations = {
    en: {
    Priv:"",
    BaixeoApp: "Download App",
    Politica:"",
  },
  pt: {
    Priv:"Termos de uso",
    BaixeoApp: "Baixe o App",
    Politica:"Políticas de privacidade",
  },
  de: {
    Priv:"",
    BaixeoApp: "App herunterladen",
    Politica:"",
  },
  fr: {
    Priv:"",
    BaixeoApp: "Télécharger l'application",
    Politica:"",
  },
  es: {
    Priv:"",
    BaixeoApp: "Descargar la App",
    Politica:"",
  }
}
  
  const texts = translations[locale];
  


  return(
    <FooterStyled>
      <div className="content">
        <div className="content-marcadaguasocials">
          <div className="content-marcadagua">
            <div className="marcadagua">@</div>
            <div className="text">
              <text>Passeio</text>
              <text>Carioca</text>
            </div>
          </div>
          <div className="content-socials">
            <div className="socials-links">
              <div className="boxlinksI">
              <SlSocialInstagram size={"30px"}/>
              </div>
              <a className="link" href="https://www.instagram.com/riocasaseprediosantigos?igsh=eWU0eHJmcThlNmkw" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="socials-links">
              <div className="boxlinksF">
                <FaFacebook size={"30px"} />
              </div>
              <a className="link" href="https://www.facebook.com/RioCasasePrediosAntigos?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
            <div className="socials-links">
              <div className="boxlinksF">
                <FaWhatsapp  size={"30px"} />
              </div>
              <a className="link" href="https://wa.me/5521979240870" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="content-downloadlogo">
        <img className="logo" src={`${process.env.PUBLIC_URL}imagens/png/LOGO.png`} alt="Logo" />
          <NeutralButton onClick={() => scrollToSection('baixeoapp')}>{texts.BaixeoApp}</NeutralButton>
        </div>
        <div className="nav">
  
        <OutlineButton onClick={openModal}>{texts.Priv}</OutlineButton>
        <OutlineButton onClick={openPModal}>{texts.Politica}</OutlineButton>
      
        </div>        
        <Modal isOpen={modalOpen} onClose={closeModal}>  
          <Privacidade></Privacidade>                
        </Modal>        
        <Modal isOpen={modalPOpen} onClose={closePModal}>  
          <Politicas></Politicas>                
        </Modal>        
      </div>
    </FooterStyled>
  )
};

export default Footer;
