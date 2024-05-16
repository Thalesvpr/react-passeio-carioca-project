import MedalhaCard from "../../../components/MedalhaCard/MedalhaCard";
import { GameficacaoSectionStyled } from "./Style";


export const GameficacaoSection = () => {

    return(
    <GameficacaoSectionStyled>
      <div className="section-gameficacao">

        <div className="section-title">
          <div className="title-text"> Curta aquele gostinho dos </div>
          <div className="title-description"> passeios favoritos da galera! </div>        
          <div className="section-image"></div>
        </div>

        <div className="gameficacao-card">
          <MedalhaCard
           description="Image" >

          </MedalhaCard> 

          <MedalhaCard 
          description="Complete tel desafio para tal conquista e siga para proxima." 
          title = ' " Que seja doce " '
          src = "/imagens/png/medalha.png">

          </MedalhaCard>

          <MedalhaCard description="Image.">


          </MedalhaCard>

        </div>
      </div>

    </GameficacaoSectionStyled>
    )
}

export default GameficacaoSection;