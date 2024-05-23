import CarrouselMedalha from "../../../components/CarrouselMedalha/CarrouselMedalha";
import MedalhaCard from "../../../components/MedalhaCard/MedalhaCard";
import { GameficacaoSectionStyled } from "./Style";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import React, { useState, useContext } from "react";
import { TranslationsContext } from "../../../context/TranslationContext";


export const GameficacaoSection = () => {


  
  const Slides = [
    <MedalhaCard
      estado="principal"
        translations = {{
          pt: {  
              description :"Complete o Desafio para conquistar e siga para próxima!",
              title: ' " Que seja doce " ',
            },
          en: {
            description:"Complete your chalenges",
            title: ' " Sweet " ',
          },
          de: {
            description: "Vervollständige deine Herausforderungen, um diese Errungenschaft zu erreichen und zum nächsten zu gehen.",
            title: ' " Süß " ',
          },
          fr: {
            description: "Complétez votre défi pour atteindre cette conquête et passez à la suivante.",
            title: ' " Doux " ',
          },
          es: {
            description: "Completa tu desafío para tal conquista y sigue al próximo.",
            title: ' " Dulce " ',
          }
    
}}
      src= {`${process.env.PUBLIC_URL}imagens/png/medalha.png`}>
    </MedalhaCard>,
    <MedalhaCard
      estado="principal"
      translations = {{
        pt: {  
            description :"Complete o Desafio para conquistar e siga para próxima!",
            title: ' " Que seja doce " ',
          },
        en: {
          description:"Complete your chalenges",
          title: ' " Sweet " ',
        },
        de: {
          description: "Vervollständige deine Herausforderungen, um diese Errungenschaft zu erreichen und zum nächsten zu gehen.",
          title: ' " Süß " ',
        },
        fr: {
          description: "Complétez votre défi pour atteindre cette conquête et passez à la suivante.",
          title: ' " Doux " ',
        },
        es: {
          description: "Completa tu desafío para tal conquista y sigue al próximo.",
          title: ' " Dulce " ',
        }
  
}}
      src = {`${process.env.PUBLIC_URL}imagens/png/map-badge.png`}>
    </MedalhaCard>,
        <MedalhaCard
        estado="principal"
        translations = {{
          pt: {  
              description :"Complete o Desafio para conquistar e siga para próxima!",
              title: ' " Que seja doce " ',
            },
          en: {
            description:"Complete your chalenges",
            title: ' " Sweet " ',
          },
          de: {
            description: "Vervollständige deine Herausforderungen, um diese Errungenschaft zu erreichen und zum nächsten zu gehen.",
            title: ' " Süß " ',
          },
          fr: {
            description: "Complétez votre défi pour atteindre cette conquête et passez à la suivante.",
            title: ' " Doux " ',
          },
          es: {
            description: "Completa tu desafío para tal conquista y sigue al próximo.",
            title: ' " Dulce " ',
          }
    
  }}
        src= {`${process.env.PUBLIC_URL}imagens/png/medalha.png`}>
      </MedalhaCard>,
          <MedalhaCard
          estado="principal"
          translations = {{
            pt: {  
                description :"Complete o Desafio para conquistar e siga para próxima!",
                title: ' " Que seja doce " ',
              },
            en: {
              description:"Complete your chalenges",
              title: ' " Sweet " ',
            },
            de: {
              description: "Vervollständige deine Herausforderungen, um diese Errungenschaft zu erreichen und zum nächsten zu gehen.",
              title: ' " Süß " ',
            },
            fr: {
              description: "Complétez votre défi pour atteindre cette conquête et passez à la suivante.",
              title: ' " Doux " ',
            },
            es: {
              description: "Completa tu desafío para tal conquista y sigue al próximo.",
              title: ' " Dulce " ',
            }
      
    }}
          src={`${process.env.PUBLIC_URL}imagens/png/map-badge.png`}>
        </MedalhaCard>,
  ]

  const { locale } = useContext(TranslationsContext);
  
  const translations = {
    en: {
      Jogue:'Play and earn points to conquer amazing Badges!'
      
    },
    pt: {
      Jogue:'Jogue e ganhe pontos, para conquistar medalhas incríveis!'
     
    },

    es: {
      Jogue:'¡Juega y gana puntos para conquistar medallas increíbles!'
      
    },

    de: {
      Jogue:'Spiele und verdiene Punkte, um erstaunliche Medaillen zu erobern!'
     
    },

    fr: {
      Jogue:'Jouez et gagnez des points pour conquérir des médailles incroyables !'
    },


  }
  const texts = translations[locale];

  return (
    <GameficacaoSectionStyled>
        <div className="gameficacao-title">
          <div className="gameficacao-text"> {texts.Jogue} </div>
          <div className="gameficacao-description"> </div>
          </div>
      <div className="section-gameficacao">
        <div className="gameficacao-image"> 
          <img src={`${process.env.PUBLIC_URL}imagens/png/explore.png`}/>
        </div>
        <CarrouselMedalha
                prevButtonLabel = {<BsChevronLeft/>}
                nextButtonLabel = {<BsChevronRight/>}
                slides = {Slides}>
                </CarrouselMedalha>
    </div>
    </GameficacaoSectionStyled>
  )
}

export default GameficacaoSection;