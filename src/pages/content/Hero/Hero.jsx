import { useContext } from "react";
import { NeutralButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { TranslationsContext } from "../../../context/TranslationContext";
import { HeroSectionStyled } from "./Style";

export const HeroSection = () => {
  const { locale } = useContext(TranslationsContext);
  {
    key: {
        key2: ""
    }
    
  }
  const translations = {
    en: {
      heroTitle: 'Your passport to explore <span>Rio de Janeiro</span>',
      heroSubtitle: 'Download the <span>Passeio Carioca</span> available for iOS and Android.',
      ctaButton: 'Available Platforms'
    },
    es: {
      heroTitle: 'Tu pasaporte para explorar <span>Río de Janeiro</span>',
      heroSubtitle: 'Descarga el <span>Passeio Carioca</span> disponible para iOS y Android.',
      ctaButton: 'Plataformas Disponibles'
    },
    fr: {
      heroTitle: 'Votre passeport pour explorer <span>Rio de Janeiro</span>',
      heroSubtitle: 'Téléchargez le <span>Passeio Carioca</span> disponible pour iOS et Android.',
      ctaButton: 'Plateformes Disponibles'
    },
    de: {
      heroTitle: 'Ihr Pass zur Erkundung von <span>Rio de Janeiro</span>',
      heroSubtitle: 'Laden Sie den <span>Passeio Carioca</span> herunter, verfügbar für iOS und Android.',
      ctaButton: 'Verfügbare Plattformen'
    },
    pt: {
      heroTitle: 'Seu passaporte para explorar o <span>Rio de Janeiro</span>',
      heroSubtitle: 'Baixe o <span>Passeio Carioca</span> disponível para iOS e Android.',
      ctaButton: 'Plataformas Disponíveis'
    }
  };
  
  

  const texts = translations[locale];
  
  return (
    <SectionBase>
      <HeroSectionStyled>
        <img src="/imagens/png/splash_screen.png" alt="Splash screen" />
        <div className="content-text">
          <h2 dangerouslySetInnerHTML={{ __html: texts.heroTitle }}></h2>
          {/* <h2>{texts.heroTitle}</h2> */}
           {/* 
                dangerouslySetInnerHTML={{ __html: texts.key }}
                É pra quando voce tem tags html dentro de uma string
          
          */}
          <h1 dangerouslySetInnerHTML={{ __html: texts.heroSubtitle }}></h1>
        </div>
        <div className="content-cta">
          <NeutralButton>
            {texts.ctaButton}
          </NeutralButton>
        </div>
      </HeroSectionStyled>
    </SectionBase>
  );
};

export default HeroSection;
