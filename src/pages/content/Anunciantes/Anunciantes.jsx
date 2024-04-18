import { SecondLineButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { AnunciantesSectionStyled } from "./Style";




const AnunciantesSection = () => ( 
    
<SectionBase>
    <AnunciantesSectionStyled>
        <div className="section-title">
            <h1>Ja pensou em ampliar a visibilidade do seu negocio ??</h1>
        </div>
        <div className="section-content">
            <div className="content-cta">
                <h2 className="content-subtitle">Conecte Sua Marca com Aventureiros,</h2>
                <p className="content-text">Aumente a visibilidade da sua empresa.</p>

                <p className="content-subtext">Ofereça promoções, se destaque no mapa e acesse dados valiosos sobre seus potenciais clientes.</p> 
                <div className="content-button">
                <SecondLineButton>Para Anunciantes</SecondLineButton>
                </div>
            </div>
            <div className="content-table">
                <p className="tabela">Tabela de Planos</p>

            </div>

        </div>
    </AnunciantesSectionStyled>
</SectionBase>


)

export default AnunciantesSection;