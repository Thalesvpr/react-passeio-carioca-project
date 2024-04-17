import SectionBase from "../../../components/SectionBase/SectionBase";
import { ExploreSectionStyled } from "./Style";


const ExploreSection = () => (
    <SectionBase>
        <ExploreSectionStyled>
            <h1>Explore, Jogue e Conecte-se</h1>
            <p>Descubra os segredos dos pontos turísticos,
                 participe de desafios de gameficação e encontre os melhores passeios guiados.</p>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </ExploreSectionStyled>
    </SectionBase>
)

export default ExploreSection;

