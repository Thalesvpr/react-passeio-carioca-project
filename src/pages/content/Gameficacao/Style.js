import styled from "styled-components";


const GameficacaoSectionStyled = styled.article`

div.section-gameficacao{ 
    background-color: var(--destaque);
    height: 1000px;
    padding: 0px;
    color: var(--contrast);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    .section-title{
    padding-top: 100px;


    }
        .title-text{
        font-size: 24px;
        font-weight: bold;
        margin-top: 0px; /* Espaçamento abaixo do texto do título */

        

        }
        .title-description{

        }
        .section-image{
        height: 225px;
        width: 225px;
        background-color: yellow;
        display: flex;
        position: absolute;
        margin: auto;
        left: 100;
        right: 10;
        

        }    
    
 
    div.gameficacao-card{
    background-color: none;
    display: flex;
    color: var(--contrast);
    font-size: 16px; 
    line-height: 1.5; 
    justify-content: center;
}
}
`

export {GameficacaoSectionStyled};
