import CarrouselMedalha from "../../../components/CarrouselMedalha/CarrouselMedalha";
import MedalhaCard from "../../../components/MedalhaCard/MedalhaCard";
import { GameficacaoSectionStyled } from "./Style";


export const GameficacaoSection = () => {


  const Slides = [
    <MedalhaCard
      estado="principal"
      description="Complete tel desafio para tal conquista e siga para proxima."
      title=' " Que seja doce " '
      src="/imagens/png/medalha.png">
    </MedalhaCard>,
    <MedalhaCard
      estado="principal"
      description="Complete tel desafio para tal conquista e siga para proxima."
      title=' " Que seja doce " '
      src="/imagens/png/medalha.png">
    </MedalhaCard>,

  ]
  const slides=[
    <h1>oi</h1>,
    <h1>oi</h1>,
    <h1>oi</h1>,
    <h1>oi</h1>,
    <h1>oi</h1>,

  ]
  return (
    <GameficacaoSectionStyled>

        <CarrouselMedalha
                prevButtonLabel = "Previous"
                nextButtonLabel = "Next"
                slides = {Slides}>
                
                </CarrouselMedalha>

    </GameficacaoSectionStyled>
  )
}

export default GameficacaoSection;