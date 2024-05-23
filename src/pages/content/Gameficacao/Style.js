import styled from "styled-components";


const GameficacaoSectionStyled = styled.article`

div.gameficacao-title{
        font-size: 24px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-inline: 120px;

        .gameficacao-description{
        width: 300px;
        
        .title-text{
        width: 300px;
        font-size: 2rem;
        font-weight: 600;

        }

        }
    }  



div.section-gameficacao{ 
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    
    .gameficacao-image{
        img{
            height: auto;
            width: 600px;
               

         }
        }
    

    div.gameficacao-card{
    background-color: none;
    display: flex;
    color: var(--contrast);
    font-size: 16px; 
    line-height: 1.5; 

    div.gameficacao-text{
        
    }




} 
}
`

export {GameficacaoSectionStyled};
