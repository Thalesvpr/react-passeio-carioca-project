import styled from "styled-components";


const GameficacaoSectionStyled = styled.article`



div.section-gameficacao{ 
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    
    .section-title{
    padding-top: 100px;

    }
        .title-text{
        font-size: 24px;
        font-weight: bold;
        margin-top: 0px;
        display: flex;
        

        }
        .title-description{
        display: flex;
        }
        .section-image{
        height: 225px;
        width: 400px;
        border-radius: 20px;
        background-color: yellow;
        display: flex;
        }    
    
 
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
