import Carrousel from "../../../components/Carrousel/Carrousel";
import SectionBase from "../../../components/SectionBase/SectionBase";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { PasseiosSectionStyled } from "./Style";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const PasseiosSection = () => {
    const slides=[
        {
            img: "/imagens/passeios/castelinho-do-flamengo.jpg",
            translations: {
                en: {
                    title: "Passeio 1",
                    description: "EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc"
                },
                pt: {
                    title: "Passeio 1",
                    description: "PT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc"
                }
            }
        },
        {
            img: "/imagens/passeios/palacete-guinle.jpg",
            translations: {
                en: {
                    title: "Passeio 2",
                    description: " EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc"
                },
                pt: {
                    title: "Passeio 2",
                    description: "PT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget ultricies aliquam, nunc nunc"
                }
            }
        },
    ]

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
