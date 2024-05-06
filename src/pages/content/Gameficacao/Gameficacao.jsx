import SectionBase from "../../../components/SectionBase/SectionBase";
import { GameficacaoSectionStyled } from "./Style";
import { InputField } from './../../../components/InputField/InputField';
import { SecondLineButtonStyled } from "../../../components/Button/Style";
import { SecondLineButton } from "../../../components/Button/Button";
import Slider from "react-slick";

export const GameficacaoSection = () => (
    <GameficacaoSectionStyled>
        <div className="section-content">
            <div className="content-text">
                <div>
                    <Slider/>
                
                </div>
            </div>
        </div>
    </GameficacaoSectionStyled>
)

export default GameficacaoSection;