import styled from "styled-components";


const GameficacaoSectionStyled = styled.article`

div.section-gameficacao{ 
    background-color: var(--neutral);
    height: 500px;
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
        margin-top: 0px;
        display: flex;
        position: absolute;
        left: 20px;
        top: 2200px;

        

        }
        .title-description{
        display: flex;
        position: absolute;
        left: 20px;
        top: 2235px;
        }
        .section-image{
        height: 225px;
        width: 400px;
        border-radius: 20px;
        background-color: yellow;
        display: flex;
        position: absolute;
        margin: auto;
        left: 20px;
        top: 2310px;

        }    
    
 
    div.gameficacao-card{
    background-color: none;
    display: flex;
    color: var(--contrast);
    font-size: 16px; 
    line-height: 1.5; 
    justify-content: end;
    align-items: end;



}
} 



`

export {GameficacaoSectionStyled};
