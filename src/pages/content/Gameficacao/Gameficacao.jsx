import SectionBase from "../../../components/SectionBase/SectionBase";
import { GameficacaoSectionStyled } from "./Style";


export const GameficacaoSection = () => {

    return(
    <SectionBase>
    <GameficacaoSectionStyled>
      <div className="section-gameficacao"></div>
          <div className="gameficacao-title">
              Conquiste o Rio de Janeiro, conheça algumas medalhas!
            </div>
            <div className="gameficacao-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
        <div className="slider-medalha">
            </div>
            <h3>Confira suas medalhas de gameficação.</h3>
    </GameficacaoSectionStyled>
    </SectionBase>
    )
}

export default GameficacaoSection;