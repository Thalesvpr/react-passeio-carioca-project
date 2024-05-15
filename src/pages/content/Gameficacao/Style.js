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
        display: flex;
        position: absolute;
        left: 20px;
        top: 1450px;

        

        }
        .title-description{
        display: flex;
        position: absolute;
        left: 20px;
        top: 1500px;
        }
        .section-image{
        height: 225px;
        width: 400px;
        border-radius: 20px;
        background-color: yellow;
        display: flex;
        position: absolute;
        margin: auto;
        right: 20px;
        top: 1415px;

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
