import React, { useContext } from "react";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { BaixeAppSectionStyled } from "./Style";
import { AndroidLogo, AppleLogo } from './../../../components/Icons/Icons';
import { NeutralButton } from "../../../components/Button/Button";
import { TranslationsContext } from "../../../context/TranslationContext";
import { useNavigate } from "react-router-dom";

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

const BaixeAppSection = () => {
    const { locale } = useContext(TranslationsContext);
    const texts = translations[locale] || translations.en; 

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    const redirectToAppleStore = () => {
        window.open("https://apps.apple.com/br/app/testflight/id899247664", "_blank");
    };

    const redirectToGooglePlayStore = () => {
        window.open("https://play.google.com/store/search?q=facebook&c=apps", "_blank");
    };

    return (
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
                        <h1>{texts.title}</h1>
                        <p>{texts.description}</p>
                        <img
                            src={`${process.env.PUBLIC_URL}/imagens/png/qr-code-download-app.png`}
                            alt="QR Code Download"
                            onClick={() => navigateTo('/download-app-link')}
                        />
                    </div>
                    <div className="content-cta">
                        <div className="cta-download">
                            <NeutralButton onClick={redirectToAppleStore}>
                                {texts.downloadApple}
                            </NeutralButton>
                            <NeutralButton onClick={redirectToGooglePlayStore}>
                                {texts.downloadAndroid}
                            </NeutralButton>
                        </div>
                        <span>{texts.extraText}</span>
                    </div>
                </div>
            </BaixeAppSectionStyled>
        </SectionBase>
    );
};

export default BaixeAppSection;
