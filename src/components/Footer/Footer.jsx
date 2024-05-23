import React, { useState, useEffect, useContext } from "react";
import { FooterStyled } from "./Style";
import { OutlineButton, NeutralButton } from "../Button/Button";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TranslationsContext } from "../../context/TranslationContext";

const Footer = () => {

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
              <div className="boxlinks">
              <SlSocialInstagram size={"90%"}/>
              </div>
              <a className="insta">Instagram</a>
            </div>
            <div className="socials-links">
              <div className="boxlinks">
                <FaFacebook size={"90%"} />
              </div>
              <a>Facebook</a>
            </div>
          </div>
        </div>
        <div className="content-downloadlogo">
          <div className="box"></div>
          <NeutralButton>{texts.BaixeoApp}</NeutralButton>
        </div>
        <div className="nav">
          <OutlineButton>{texts.BaixeoApp}</OutlineButton>
          <OutlineButton>{texts.Explore}</OutlineButton>
          <OutlineButton>{texts.Parcerias}</OutlineButton>
          <OutlineButton>{texts.FaleConosco}</OutlineButton>
        </div>
      </div>
    </FooterStyled>
  )
};

export default Footer;
