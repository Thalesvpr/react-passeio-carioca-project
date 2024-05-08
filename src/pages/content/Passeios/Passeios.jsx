import Carrousel from "../../../components/Carrousel/Carrousel";
import SectionBase from "../../../components/SectionBase/SectionBase";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { PasseiosSectionStyled } from "./Style";



const PasseiosSection = () => (
    <SectionBase>
        <SectionTitle>
            Curta aquele gostinho dos passeios favoritos da galera!
        </SectionTitle>
        <PasseiosSectionStyled>
            <div className="slider">
                <Carrousel slides={['1','2']}></Carrousel>
            </div>
            <h3>Visita ao passeio</h3>
        </PasseiosSectionStyled>
    </SectionBase>
)
export default PasseiosSection;
