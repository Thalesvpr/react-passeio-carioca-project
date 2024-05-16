import { NeutralButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { HeroSectionStyled } from "./Style";

export const HeroSection = () => (
    <SectionBase>
        <HeroSectionStyled>
                <img src="/imagens/png/splash_screen.png"/>
                <div className="content-text">
                    <h2>Seu passaporte para explorar o <span>Rio de Janeiro</span></h2>
                    <h1>Baixe o <span>Passeio Carioca</span> disponível para iOS e Android.</h1>
                </div>
                <div className="content-cta">
                    <NeutralButton>
                        Plataformas Disponíveis
                    </NeutralButton>
                </div>
        </HeroSectionStyled>
    </SectionBase>
)

export default HeroSection;