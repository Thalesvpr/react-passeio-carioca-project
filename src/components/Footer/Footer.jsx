import React from "react";
import { FooterStyled } from "./Style";
import { OutlineButton, SecondLineButton } from "../Button/Button";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => (
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
);

export default Footer;
