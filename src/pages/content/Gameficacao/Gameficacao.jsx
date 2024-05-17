import { IconButton} from "../../../components/Button/Button";
import MedalhaCard from "../../../components/MedalhaCard/MedalhaCard";
import { GameficacaoSectionStyled } from "./Style";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";


export const GameficacaoSection = () => {

    return(
    <GameficacaoSectionStyled>
      <IconButton>
        <BsChevronRight 
        
        
        
        />
      </IconButton>
      <IconButton>
        <BsChevronLeft 
        
        
        
        /> 
      </IconButton>
      <div className="section-gameficacao">

        <div className="section-title">
          <div className="title-text"> Curta aquele gostinho dos </div>
          <div className="title-description"> passeios favoritos da galera! </div>        
          <div className="section-image"></div>
        </div>

        <div className="gameficacao-card">
          <MedalhaCard 
          estado = "principal"
          description="Complete tel desafio para tal conquista e siga para proxima." 
          title = ' " Que seja doce " '
          src = "/imagens/png/medalha.png">

          </MedalhaCard>

          <MedalhaCard 
          src = "/imagens/png/medalha.png"
          estado = "secundaria"
          description="Image.">


          </MedalhaCard>

        </div>
      </div>

    </GameficacaoSectionStyled>
    )
}

export default GameficacaoSection;