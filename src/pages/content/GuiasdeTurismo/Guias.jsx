import React, { useState, useContext } from "react";
import {
  NeutralButton,
  PrimaryButton,
} from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import { TranslationsContext } from "../../../context/TranslationContext";
import { GuiasSectionStyled } from "./Style";

const GuiasSection = () => {
  const { locale } = useContext(TranslationsContext);
  const translations = {
    en: {
       ja: 'Have you ever thought about expanding your business visibility?',
      AmplieSeu: "Expand Your Reach",
      AlcanceOnline: "Online Reach",
      Explore: "Connect with Tourists and Locals.",
      EncontreGuias:
        "Sign up today and start offering your guided tours through Passeio Carioca.",
      ParaGuiasdeTurismo: "For Tour Guides",
    },
    pt: {
      ja:'Já pensou em ampliar a visibilidade do seu negócio ??',
      AmplieSeu: "Amplie Seu",
      AlcanceOnline: "Alcance Online",
      Explore: "Conecte-se com Turistas e Moradores.",
      EncontreGuias:
        "Cadastre-se hoje e comece a oferecer seus passeios guiados através do Passeio Carioca.",
      ParaGuiasdeTurismo: "Para Guias de Turismo",
    },
    es: {
       ja: '¿Alguna vez has pensado en ampliar la visibilidad de tu negocio?',
      AmplieSeu: 'Amplíe Su Alcance',
      AlcanceOnline: 'en Línea',
      Explore: 'Conéctese con Turistas y Residentes.',
      EncontreGuias: 'Regístrese hoy y comience a ofrecer sus recorridos guiados a través de Passeio Carioca.',
      ParaGuiasdeTurismo: 'Para Guías Turísticos'
    },
    de: {
      AmplieSeu: 'Erweitern Sie Ihre Reichweite',
      AlcanceOnline: 'Online-Reichweite',
      Explore: 'Verbinden Sie sich mit Touristen und Einheimischen.',
      EncontreGuias: 'Melden Sie sich noch heute an und beginnen Sie, Ihre geführten Touren über Passeio Carioca anzubieten.',
      ParaGuiasdeTurismo: 'Für Reiseleiter',
      ja: 'Schon mal über mehr Sichtbarkeit nachgedacht?'
    },
    fr: {
    ja: 'Avez-vous déjà pensé à accroître la visibilité de votre entreprise ?',
    AmplieSeu: 'Étendez Votre Portée',
    AlcanceOnline: 'Portée en Ligne',
    Explore: 'Connectez-vous avec les Touristes et les Locaux.',
    EncontreGuias: 'Inscrivez-vous dès aujourd\'hui et commencez à proposer vos visites guidées via Passeio Carioca.',
    ParaGuiasdeTurismo: 'Pour les Guides Touristiques'
    },
  };

  const texts = translations[locale];

  const openModalHandler = () => {
    setOpenModal(true);
    document.body.classList.add("modal-open");
  };

  const closeModalHandler = () => {
    setOpenModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <>
      <GuiasSectionStyled>
        <h1 className="session-title">
          {texts.ja}
        </h1>
        <div className="Guias">
          <h1 className="G1">{texts.AmplieSeu}</h1>
          <h1 className="G2">{texts.AlcanceOnline}</h1>
          <p>{texts.Explore}</p>
          <p>{texts.EncontreGuias}</p>
          <div className="whats">
            <a href="https://wa.me//5521979240870?text=Ol%C3%A1%2C%20gostaria%20de%20se%20tornar%20um%20Guia%20de%20Turismo%20e%20mostrar%20%C3%A0%20todos%20a%20beleza%20do%20Rio%3F%3F
" target="_blanke">
          <NeutralButton >
            {texts.ParaGuiasdeTurismo}
          </NeutralButton>
          </a>
          </div>
        </div>
      </GuiasSectionStyled>
    </>
  );
};

export default GuiasSection;
