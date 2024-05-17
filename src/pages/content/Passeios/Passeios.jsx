import Carrousel from "../../../components/Carrousel/Carrousel";
import SectionBase from "../../../components/SectionBase/SectionBase";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { PasseiosSectionStyled } from "./Style";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const PasseiosSection = () => {
    const slides=['1','2', '3', '4', '5']


    return(
    <SectionBase>
        <SectionTitle>
            Curta aquele gostinho dos passeios favoritos da galera!
        </SectionTitle>
        <BsChevronRight 
        
        
        
        />
        <PasseiosSectionStyled>
            <div className="slider">
                <Carrousel 
                prevButtonLabel = {<BsChevronLeft/>}
                nextButtonLabel = {<BsChevronRight/>}
                slides = {slides}>
                
                
                </Carrousel>
            </div>
            <h3>Visita ao passeio</h3>
        </PasseiosSectionStyled>
    </SectionBase>
    )
    }

export default PasseiosSection;
