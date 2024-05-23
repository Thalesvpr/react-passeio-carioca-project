import SectionBase from "../../../components/SectionBase/SectionBase";
import { BaixeAppSectionStyled } from "./Style";
import { AndroidLogo, AppleLogo } from './../../../components/Icons/Icons';
import { NeutralButton } from "../../../components/Button/Button";
import { useContext } from "react";
import { TranslationsContext } from "../../../context/TranslationContext";


export const BaixeAppSection = () => {
    const {locale} = useContext(TranslationsContext)
    
    const translations = {
        en: {
          title: 'Start Your Adventure in Rio Right Now',
          description: 'Passeio Carioca is your passport to explore Rio de Janeiro, combining history, culture, and fun in a single experience.',
          downloadApple: 'Download now for Apple',
          downloadAndroid: 'Download now for Android',
          extraText: 'Explore fascinating stories, participate in interactive games, and connect with local guides.'
        },
        es: {
          title: 'Empieza tu aventura en Río ahora mismo',
          description: 'Passeio Carioca es tu pasaporte para explorar Río de Janeiro, combinando historia, cultura y diversión en una sola experiencia.',
          downloadApple: 'Descargar ahora para Apple',
          downloadAndroid: 'Descargar ahora para Android',
          extraText: 'Explora historias fascinantes, participa en juegos interactivos y conéctate con guías locales.'
        },
        fr: {
          title: 'Commencez votre aventure à Rio dès maintenant',
          description: 'Passeio Carioca est votre passeport pour explorer Rio de Janeiro, en combinant histoire, culture et plaisir en une seule expérience.',
          downloadApple: 'Téléchargez maintenant pour Apple',
          downloadAndroid: 'Téléchargez maintenant pour Android',
          extraText: 'Découvrez des histoires fascinantes, participez à des jeux interactifs et connectez-vous avec des guides locaux.'
        },
        de: {
          title: 'Starten Sie Ihr Abenteuer in Rio jetzt',
          description: 'Passeio Carioca ist Ihr Pass zur Erkundung von Rio de Janeiro, der Geschichte, Kultur und Spaß in einem einzigen Erlebnis vereint.',
          downloadApple: 'Jetzt für Apple herunterladen',
          downloadAndroid: 'Jetzt für Android herunterladen',
          extraText: 'Entdecken Sie faszinierende Geschichten, nehmen Sie an interaktiven Spielen teil und verbinden Sie sich mit lokalen Guides.'
        },
        pt: {
          title: 'Comece Sua Aventura no Rio Agora Mesmo',
          description: 'O Passeio Carioca é o seu passaporte para explorar o Rio de Janeiro, combinando história, cultura e diversão em uma única experiência.',
          downloadApple: 'Baixe agora para Apple',
          downloadAndroid: 'Baixe agora para Android',
          extraText: 'Navegue por histórias fascinantes, participe de jogos interativos e conecte-se com guias locais.'
        }
      };
      const texts = translations[locale]
    return(
    <SectionBase>
        <BaixeAppSectionStyled>
            <div className="content">
                <div className="content-plataform">
                    <div>
                        <AppleLogo />
                    </div>
                    <div>
                        <AndroidLogo />
                    </div>
                </div>
                <div className="content-text">
                    <h1>
                        {texts.title}
                    </h1>
                    <p>
                        {texts.description}
                    </p>
                </div>
                <div className="content-cta">
                    <div className="cta-download">
                    <NeutralButton >
                        {texts.downloadApple}
                    </NeutralButton>
                    <NeutralButton>
                    {texts.downloadAndroid}

                    </NeutralButton>
                    </div>
                <span>{texts.extraText}</span>
                </div>

                    <br />

            </div>
        </BaixeAppSectionStyled>
    </SectionBase>
)}

export default BaixeAppSection;