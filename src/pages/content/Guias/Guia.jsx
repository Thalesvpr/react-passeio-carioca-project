import { SecondLineButton, ThirdLineButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { GuiasSectionStyled } from './Style';






const GuiasSection = () => ( 
   <SectionBase>
    <GuiasSectionStyled>
        
            <div className="section-guiacontent">
                <div className="content-guiacta">
                    <h2 className="content-guiasubtitle">Amplie Seu Alcance Online</h2>
                    <p className="content-guiatext">Conecte-se com turistas e moradores. </p>

                    <p className="content-guiasubtext"> Cadastre-se hoje e comece a oferecer seus passeios guiados através do Passeio Carioca</p> 
                <div className="content-guiabutton">
             
                <ThirdLineButton>Para Guias de Turismo</ThirdLineButton>
            
                </div>
            </div>
            <div className="content-guiatable">
                <p className="tabela">ilustraçao mostrando um guia de turismos</p>

            </div>

               
        </div>
    </GuiasSectionStyled>

    </SectionBase> 
            

    



)

export default GuiasSection