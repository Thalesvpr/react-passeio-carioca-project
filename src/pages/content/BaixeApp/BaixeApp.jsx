import SectionBase from "../../../components/SectionBase/SectionBase";
import { BaixeAppSectionStyled } from "./Style";
import {AndroidLogo, AppleLogo} from './../../../components/Icons/Icons';


export const BaixeAppSection = () => (
    <SectionBase>
        <BaixeAppSectionStyled>
        <div className="content-text">
            <h1>
            Comece Sua Aventura no Rio Agora Mesmo
            </h1>
            <p>
            O Passeio Carioca é o seu passaporte para explorar o Rio de Janeiro, combinando história, cultura e diversão em uma única experiência. 
            </p>
            <div className="content-plataform">
                <div>
                    <AppleLogo/>
                </div>
                <div>
                    <AndroidLogo/>
                </div>
            </div>
        </div>
        </BaixeAppSectionStyled>
    </SectionBase>
)

export default BaixeAppSection;