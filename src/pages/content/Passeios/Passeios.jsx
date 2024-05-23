import React, { useState, useContext } from "react";
import Carrousel from "../../../components/Carrousel/Carrousel";
import SectionBase from "../../../components/SectionBase/SectionBase";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { PasseiosSectionStyled } from "./Style";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { TranslationsContext } from "../../../context/TranslationContext";

const PasseiosSection = () => {
    const slides = [
        {
            img: `${process.env.PUBLIC_URL}imagens/passeios/castelinho-do-flamengo.jpg`,
            translations: {
                en: {
                    title: "Tour 1",
                    description: "EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc",
                    
                },
                pt: {
                    title: "Passeio 1",
                    description: "PT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc",
                    
                },
                es: {
                    title: "Paseo 1",
                    description: "ES Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc",
                    
                },
                fr: {
                    title: "Tournée 1",
                    description: "FR Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc",
                    
                },
                de: {
                    title: "Tour 1",
                    description: "DE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc",
                    
                }
            }
        },
        {
            img: `${process.env.PUBLIC_URL}imagens/passeios/palacete-guinle.jpg`,
            translations: {
                en: {
                    title: "Tour 2",
                    description: "EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc"
                },
                pt: {
                    title: "Passeio 2",
                    description: "PT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc"
                },
                es: {
                    title: "Paseo 2",
                    description: "ES Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc"
                },
                fr: {
                    title: "Tournée 2",
                    description: "FR Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc"
                },
                de: {
                    title: "Tour 2",
                    description: "DE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc"
                }
            }
        },
    ];

    
const { locale } = useContext(TranslationsContext);

const translations = {
    en: { 
        curta: "Enjoy that taste of everyone's favorite trips!",
    },
    pt: {
        curta: "Curta aquele gostinho dos passeios favoritos da galera!",
    }, 

    es: {
        curta: "¡Disfruta de ese sabor de las salidas favoritas de todos!",
    },

    de: {
        curta: "Genießen Sie diesen Geschmack der Lieblingsausflüge aller!",
    },

    fr: {
        curta: "Profitez de ce goût des sorties préférées de tout le monde !",
    },


    
};

const texts = translations[locale];

    return (
        <SectionBase>
            <SectionTitle>
                {texts.curta}
            </SectionTitle>
            <PasseiosSectionStyled>
                <div className="slider">
                    <Carrousel
                        prevButtonLabel={<BsChevronLeft />}
                        nextButtonLabel={<BsChevronRight />}
                        slides={slides}
                    />
                </div>
            </PasseiosSectionStyled>
        </SectionBase>
    );
};

export default PasseiosSection;