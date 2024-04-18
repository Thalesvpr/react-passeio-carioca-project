import { SectionTitleStyled } from "./Style";




const SectionTitle = (props) => (
    <SectionTitleStyled>
        <h1>{props.children}</h1>
    </SectionTitleStyled>
)

export default SectionTitle;

