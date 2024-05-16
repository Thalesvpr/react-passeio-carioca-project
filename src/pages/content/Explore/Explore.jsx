import { NeutralButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { ExploreSectionStyled } from "./Style";


const ExploreSection = () => (
    <SectionBase>
        <ExploreSectionStyled>
            <div className="content-article">
                <div className="article-text">
                <h1>Explore, Jogue e Conecte-se</h1>
            <p>Descubra os segredos dos pontos turísticos, participe de desafios de gameficação e encontre os melhores passeios guiados.</p>
                </div>
            <img className="badge" src="/imagens/png/map-badge.png"  />

            </div>
            <div className="content-cta">
                <img className="cta-map" src="/imagens/png/map.png"  />
                <div className="cta-box">
                    <div className="box-content">
                    <h2>Tudo em um só lugar.</h2>
                    <NeutralButton>
                        Baixe o app
                    </NeutralButton>
                    </div>
                </div>
            </div>

        </ExploreSectionStyled>
    </SectionBase>
)

export default ExploreSection;

