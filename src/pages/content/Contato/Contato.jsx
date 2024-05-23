import SectionBase from "../../../components/SectionBase/SectionBase";
import { ContatoSectionStyled } from "./Style";
import { InputField } from './../../../components/InputField/InputField';
import { NeutralButtonStyled } from "../../../components/Button/Style";
import { NeutralButton } from "../../../components/Button/Button";
import { TranslationsContext } from "../../../context/TranslationContext";
import React, { useState, useEffect, useContext } from "react";

export const ContatoSection = () => {

    const {locale}= useContext(TranslationsContext);

const translations = {
    en: {
        contato: "Need to get in touch with us?",
        enviar: "Send",
    },
    pt: {
        contato: "Precisa entrar em contato com a gente?",
        enviar: "Enviar",
    },
    de: {
        contato: "Müssen Sie uns kontaktieren?",
        enviar: "Senden",
    },
    fr: {
        contato: "Besoin de nous contacter?",
        enviar: "Envoyer",
    },
    es: {
        contato: "¿Necesitas ponerte en contacto con nosotros?",
        enviar: "Enviar",
    }
}

const texts = translations[locale];

    return(
        <SectionBase>
            <ContatoSectionStyled>
                <div className="section-content">
                    <div className="content-form">
                        <h1>{texts.contato}</h1>
                        <InputField
                            placeholder="Titulo"
                            titulo="Escreva seu texto"
                        />
                        <InputField
                            placeholder="Titulo"
                            titulo="Titulo"
                        />
                        <NeutralButton>
                            {texts.enviar}
                        </NeutralButton>
                    </div>
                    {/* <img className="lapa" src={`${process.env.PUBLIC_URL}imagens/png/lapa.png`}/> */}
                </div>
                    <img className="lapa" src="/imagens/png/lapa.png" />
            </ContatoSectionStyled>
            </SectionBase>
    )
}

export default ContatoSection;

// Precisa entrar em contato conosco?