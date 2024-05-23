import CarrouselMedalha from "../../../components/CarrouselMedalha/CarrouselMedalha";
import MedalhaCard from "../../../components/MedalhaCard/MedalhaCard";
import { GameficacaoSectionStyled } from "./Style";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";


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
          }
    
}}
      src="/imagens/png/medalha.png">
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
        }
  
}}
      src="/imagens/png/map-badge.png">
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
          }
    
  }}
        src="/imagens/png/medalha.png">
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
            }
      
    }}
          src="/imagens/png/medalha.png">
        </MedalhaCard>,

  ]
  return (
    <GameficacaoSectionStyled>
        <div className="gameficacao-title">
          <div className="gameficacao-text">Curta aquele gostinho dos </div>
          <div className="gameficacao-description">passeios favoritos da galera! </div>
          </div>
      <div className="section-gameficacao">
        <div className="gameficacao-image"> 
          <img src="/imagens/png/explore.png"/>
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