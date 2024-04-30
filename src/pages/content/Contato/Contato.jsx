import SectionBase from "../../../components/SectionBase/SectionBase";
import { ContatoSectionStyled } from "./Style";
import { InputField } from './../../../components/InputField/InputField';
import { SecondLineButtonStyled } from "../../../components/Button/Style";

export const ContatoSection = () => (
    <SectionBase>
        <ContatoSectionStyled>
            <div className="section-content">
            <h2>Tem perguntas ou sugestões?</h2>
            <h3> Nossa equipe está pronta para ajudar.</h3>
            <div className="content-form">
            <h1>Precisa entrar em contato conosco?</h1>
            <InputField
                placeholder = "Titulo 1"        
                titulo = "Titulo 1"
            />
            <InputField
                placeholder = "qwq"
                titulo = "Titulo"
            />
                </div>
        </div>
        </ContatoSectionStyled>

    </SectionBase>

)

export default ContatoSection;