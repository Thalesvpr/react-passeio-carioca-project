import SectionBase from "../../../components/SectionBase/SectionBase";
import { ContatoSectionStyled } from "./Style";
import { InputField } from './../../../components/InputField/InputField';
import { SecondLineButtonStyled } from "../../../components/Button/Style";
import { SecondLineButton } from "../../../components/Button/Button";

export const ContatoSection = () => (
    <SectionBase>
        <ContatoSectionStyled>
            <div className="section-content">
            <div className="content-form">
            <h1>Precisa entrar em contato conosco?</h1>
            <InputField
                placeholder = "Titulo"        
                titulo = "Escreva seu texto"
            />
            <InputField
                placeholder = "Titulo"
                titulo = "Titulo"
            />
            <SecondLineButton>
                Enviar
            </SecondLineButton>
                </div>
        </div>
        </ContatoSectionStyled>

    </SectionBase>

)

export default ContatoSection;