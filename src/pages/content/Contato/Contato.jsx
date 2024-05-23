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
        titulo1: "Title",
        escreva: "Write your text",
        titulo2: "Title",
    },
    pt: {
        contato: "Precisa entrar em contato com a gente?",
        enviar: "Enviar",
        titulo1: "Título",
        escreva: "Escreva seu Título",
        titulo2: "Título",
    },
    de: {
        contato: "Müssen Sie uns kontaktieren?",
        enviar: "Senden",
        titulo1: "Titel",
        escreva: "Schreiben Sie Ihren Text",
        titulo2: "Titel"
    },
    fr: {
        contato: "Besoin de nous contacter?",
        enviar: "Envoyer",
        titulo1: "Titre",
        escreva: "Écrivez votre texte",
        titulo2: "Titre",
    },
    es: {
        contato: "¿Necesitas ponerte en contacto con nosotros?",
        enviar: "Enviar",
        titulo1: "Título",
        escreva: "Escribe tu texto",
        titulo2: "Título"
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
                            placeholder= {texts.titulo1}
                            titulo={texts.escreva}
                        />
                        <InputField
                            placeholder={texts.titulo2}
                            titulo={texts.titulo2}
                        />
                        <NeutralButton>
                            {texts.enviar}
                        </NeutralButton>
                    </div>
                    {/* <img className="lapa" src={`${process.env.PUBLIC_URL}imagens/png/lapa.png`}/> */}
                </div>
                    <img className="lapa" src={`${process.env.PUBLIC_URL}imagens/png/lapa.png`}/>
            </ContatoSectionStyled>
            </SectionBase>
    )
}

export default ContatoSection;

// Precisa entrar em contato conosco?