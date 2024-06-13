import React, { useState, useContext } from "react";
import {
  NeutralButton,
  PrimaryButton,
} from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import { TranslationsContext } from "../../../context/TranslationContext";
import { GuiasSectionStyled } from "./Style";
import SectionBase from "../../../components/SectionBase/SectionBase";

const GuiasSection = () => {
  const { locale } = useContext(TranslationsContext);
  const translations = {
    en: {
        titulo: "Have you thought about increasing the visibility of your business?",
        subtitulo: "Expand Your Online Reach",
        explore: "Connect with Tourists and Locals.",
        encontreGuias: "Sign up today and start offering your guided tours through Passeio Carioca.",
        cta: "For Tour Guides",
    },
    pt: {
        titulo: "Já pensou em ampliar a visibilidade do seu negócio ??",
        subtitulo: "Amplie Seu alcance Online",
        explore: "Conecte-se com Turistas e Moradores.",
        encontreGuias: "Cadastre-se hoje e comece a oferecer seus passeios guiados através do Passeio Carioca.",
        cta: "Para Guias de Turismo",
    },
    es: {
        titulo: "¿Has pensado en aumentar la visibilidad de tu negocio?",
        subtitulo: "Amplía tu alcance en línea",
        explore: "Conéctate con turistas y residentes.",
        encontreGuias: "Regístrate hoy y comienza a ofrecer tus tours guiados a través de Passeio Carioca.",
        cta: "Para Guías de Turismo",
    },
    de: {
        titulo: "Haben Sie daran gedacht, die Sichtbarkeit Ihres Unternehmens zu erhöhen?",
        subtitulo: "Erweitern Sie Ihre Online-Reichweite",
        explore: "Verbinden Sie sich mit Touristen und Einheimischen.",
        encontreGuias: "Melden Sie sich noch heute an und bieten Sie Ihre geführten Touren über Passeio Carioca an.",
        cta: "Für Reiseleiter",
    },
    fr: {
        titulo: "Avez-vous pensé à augmenter la visibilité de votre entreprise ?",
        subtitulo: "Élargissez votre portée en ligne",
        explore: "Connectez-vous avec les touristes et les habitants.",
        encontreGuias: "Inscrivez-vous aujourd'hui et commencez à proposer vos visites guidées via Passeio Carioca.",
        cta: "Pour les Guides Touristiques",
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
    <SectionBase>

      <GuiasSectionStyled>
        <h1 className="sessiontitle">
          {texts.titulo}
        </h1>
        <div className="Guias">
          <h1 className="G1">{texts.subtitulo}</h1>
          <p>{texts.explore}</p>
          <p>{texts.encontreGuias}</p>
          <div className="whats">
            <a href="https://wa.me//5521979240870?text=Ol%C3%A1%2C%20gostaria%20de%20se%20tornar%20um%20Guia%20de%20Turismo%20e%20mostrar%20%C3%A0%20todos%20a%20beleza%20do%20Rio%3F%3F
" target="_blanke">
          <NeutralButton >
            {texts.cta}
          </NeutralButton>
          </a>
          </div>
        </div>
      </GuiasSectionStyled>
    </SectionBase>
  );
};

export default GuiasSection;
