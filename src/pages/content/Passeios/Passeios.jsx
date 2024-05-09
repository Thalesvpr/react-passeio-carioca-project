import Carrousel from "../../../components/Carrousel/Carrousel";
import SectionBase from "../../../components/SectionBase/SectionBase";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { PasseiosSectionStyled } from "./Style";


const PasseiosSection = () => {
    const slides=['1','2', '3', '4', '5']

    const settings = {

        showDots: true,
        infinite: true,
        slideSpeed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return(
    <SectionBase>
        <SectionTitle>
            Curta aquele gostinho dos passeios favoritos da galera!
        </SectionTitle>
        <PasseiosSectionStyled>
            <div className="slider">
                <Carrousel settings={{...settings}}
                prevButtonLabel = "Previous"
                nextButtonLabel = "Next"
                slides = {slides}>
                
                </Carrousel>
            </div>
            <h3>Visita ao passeio</h3>
        </PasseiosSectionStyled>
    </SectionBase>
    )
    }

export default PasseiosSection;
