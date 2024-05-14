import styled from "styled-components";


const GameficacaoSectionStyled = styled.article`

div.section-gameficacao{ 
    background-color: var(--destaque);
    height: 100%;
    padding: 100px;
    color: var(--contrast);
    display: flex;
    justify-content: space-evenly;     
    div.gameficacao-card{
    background-color: none;
    display: flex;
    color: var(--contrast);
    font-size: 16px; 
    line-height: 1.5; 
}
}
`

export {GameficacaoSectionStyled};
