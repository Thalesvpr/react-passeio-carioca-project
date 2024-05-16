import SectionBase from "../../../components/SectionBase/SectionBase";
import { ContatoSectionStyled } from "./Style";
import { InputField } from './../../../components/InputField/InputField';
import { NeutralButtonStyled } from "../../../components/Button/Style";
import { NeutralButton } from "../../../components/Button/Button";

export const ContatoSection = () => (
    <SectionBase>
        <ContatoSectionStyled>
            <div className="section-content">
                <div className="content-form">
                    <h1>Precisa entrar em contato conosco?</h1>
                    <InputField
                        placeholder="Titulo"
                        titulo="Escreva seu texto"
                    />
                    <InputField
                        placeholder="Titulo"
                        titulo="Titulo"
                    />
                    <NeutralButton>
                        Enviar
                    </NeutralButton>
                </div>

                {/* <img className="lapa" src={`${process.env.PUBLIC_URL}imagens/png/lapa.png`}/> */}
            </div>
                <img className="lapa" src="/imagens/png/lapa.png" />
        </ContatoSectionStyled>
        </SectionBase>


)

export default ContatoSection;