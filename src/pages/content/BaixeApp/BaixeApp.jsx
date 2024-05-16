import SectionBase from "../../../components/SectionBase/SectionBase";
import { BaixeAppSectionStyled } from "./Style";
import { AndroidLogo, AppleLogo } from './../../../components/Icons/Icons';
import { NeutralButton } from "../../../components/Button/Button";


export const BaixeAppSection = () => (
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
                        Comece Sua Aventura no Rio Agora Mesmo
                    </h1>
                    <p>
                        O Passeio Carioca é o seu passaporte para explorar o Rio de Janeiro, combinando história, cultura e diversão em uma única experiência.
                    </p>
                </div>
                <div className="content-cta">
                    <div className="cta-download">
                    <NeutralButton >
                        Baixe agora para Apple
                    </NeutralButton>
                    <NeutralButton>
                    Baixe agora para Android
                    </NeutralButton>
                    </div>
                <span>Navegue por histórias fascinantes, participe de jogos interativos e conecte-se com guias locais.</span>
                </div>

                    <br />

            </div>
        </BaixeAppSectionStyled>
    </SectionBase>
)

export default BaixeAppSection;