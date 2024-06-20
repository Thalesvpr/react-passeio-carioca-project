import SectionBase from "../../../components/SectionBase/SectionBase";
import { ContatoSectionStyled } from "./Style";
import { InputField } from './../../../components/InputField/InputField';
import { NeutralButtonStyled } from "../../../components/Button/Style";
import { NeutralButton } from "../../../components/Button/Button";
import { TranslationsContext } from "../../../context/TranslationContext";
import React, { useState, useEffect, useContext } from "react";
import emailjs from 'emailjs-com';


export const ContatoSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
           ...formData,    
            [name]: value
        });
      };
      const handleSubmit = (e) => {
       e.preventDefault()
        emailjs.sendForm('service_pjms2vz', 'template_h1dbrfa', e.target, 'YjeYHpwni_REH6jRI')
          .then((result) => {
              console.log(result.text);
              alert('Email enviado com sucesso!');
          }, (error) => {
              console.log(error.text);
              alert('Ocorreu um erro ao enviar o email.');
          });

      };
    
    const {locale}= useContext(TranslationsContext);

    const translations = {
        en: {
            contato: "Need to get in touch with us?",
            ph: "Write here",
            tituloNome: "Full Name",
            tituloEmail: "Contact Email",
            botao: "Send"
        },
        pt: {
            contato: "Precisa entrar em contato com a gente?",
            ph: "Escreva aqui",
            tituloNome: "Nome completo",
            tituloEmail: "Email de contato",
            botao: "Enviar"
        },
        de: {
            contato: "Müssen Sie uns kontaktieren?",
            ph: "Hier schreiben",
            tituloNome: "Vollständiger Name",
            tituloEmail: "Kontakt E-Mail",
            botao: "Senden"
        },
        fr: {
            contato: "Besoin de nous contacter?",
            ph: "Écrivez ici",
            tituloNome: "Nom complet",
            tituloEmail: "E-mail de contact",
            botao: "Envoyer"
        },
        es: {
            contato: "¿Necesitas ponerte en contacto con nosotros?",
            ph: "Escribe aquí",
            tituloNome: "Nombre completo",
            tituloEmail: "Correo de contacto",
            botao: "Enviar"
        }
    };
    


const texts = translations[locale];

    return(
        <SectionBase>
            <ContatoSectionStyled>
                <div className="section-content">
                    <form onSubmit={handleSubmit}>

                    <div className="content-form">
                        <h1>{texts.contato}</h1>
                        <InputField
                            name = "name"
                            onChange={handleChange}
                            value={formData.name}
                            placeholder= {texts.ph}
                            titulo={texts.tituloNome}
                            />
                        <InputField
                            name = "email"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder={texts.ph}
                            titulo={texts.tituloEmail}
                            />
                        {/* <InputField
                            name = "message"
                            onChange={handleChange}
                            value={formData.message}
                            placeholder={texts.message}
                            titulo={texts.escreva}
                            /> */}

                        <NeutralButton type="submit">
                            {texts.botao}
                        </NeutralButton>
                    </div>
                            </form>
                    {/* <img className="lapa" src={`${process.env.PUBLIC_URL}imagens/png/lapa.png`}/> */}
                </div>
                    {/* <img className="lapa" src={`${process.env.PUBLIC_URL}imagens/png/lapa.png`}/> */}
            </ContatoSectionStyled>
            </SectionBase>
    )
}

export default ContatoSection;

// Precisa entrar em contato conosco?