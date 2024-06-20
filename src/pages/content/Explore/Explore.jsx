import { useContext } from "react";
import { NeutralButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { ExploreSectionStyled } from "./Style";
import { TranslationsContext } from "../../../context/TranslationContext";


const ExploreSection = () => {
    const {locale} = useContext(TranslationsContext);

    const translations = {
        en: {
            exploreTitle: 'Explore, Play, and Connect',
            exploreDescription: 'Discover the secrets of tourist spots, participate in gamification challenges, and find the best guided tours.',
            allInOnePlace: 'All in one place.',
            downloadApp: 'Download the app'
          },
          es: {
            exploreTitle: 'Explora, Juega y Conéctate',
            exploreDescription: 'Descubre los secretos de los puntos turísticos, participa en desafíos de gamificación y encuentra los mejores recorridos guiados.',
            allInOnePlace: 'Todo en un solo lugar.',
            downloadApp: 'Descargar la app'
          },
          fr: {
            exploreTitle: 'Explorez, Jouez et Connectez-vous',
            exploreDescription: 'Découvrez les secrets des sites touristiques, participez à des défis de gamification et trouvez les meilleures visites guidées.',
            allInOnePlace: 'Tout en un seul endroit.',
            downloadApp: 'Télécharger l\'application'
          },
          de: {
            exploreTitle: 'Entdecken, Spielen und Verbinden',
            exploreDescription: 'Entdecken Sie die Geheimnisse der Sehenswürdigkeiten, nehmen Sie an Gamification-Herausforderungen teil und finden Sie die besten geführten Touren.',
            allInOnePlace: 'Alles an einem Ort.',
            downloadApp: 'App herunterladen'
          },
          pt: {
            exploreTitle: 'Explore, Jogue e Conecte-se',
            exploreDescription: 'Descubra os segredos dos pontos turísticos, participe de desafios de gameficação e encontre os melhores passeios guiados.',
            allInOnePlace: 'Tudo em um só lugar.',
            downloadApp: 'Baixe o app'
          }
        };
    const texts = translations[locale];
    return(
    <SectionBase>
        <ExploreSectionStyled>
            <div className="content-article">
                <div className="article-text">
                <h1>{texts.exploreTitle}</h1>
            <p>{texts.exploreDescription}</p>
                </div>
            <img className="badge" src={`${process.env.PUBLIC_URL}imagens/png/map-badge.png`}  />

            </div>
            <div className="content-cta">
                <img className="cta-map" src= {`${process.env.PUBLIC_URL}imagens/png/map.png`} />
                <div className="cta-box">
                    <div className="box-content">
                    <h2>{texts.allInOnePlace}</h2>
                    <NeutralButton>
                        {texts.downloadApp}
                    </NeutralButton>
                    </div>
                </div>
            </div>
            

        </ExploreSectionStyled>
    </SectionBase>
    )
}

export default ExploreSection;

