import styled from "styled-components";


const MedalhaCardPrincipal = styled.article`
  div.principal{
    background-color: var(--secundaria);
    padding-inline: 60px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 225px;
    height: 225px;
    position: relative;
    padding-block: 60px;
    justify-content: flex-end;
    color: var(--neutral);


    .content-image{
      height: 225px;
      width: 225px;
      display: flex;
      justify-content: center;
      position: absolute;
      top: -85px;
      border-radius: 20px;

    }
    .content-title{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 20px;
        .title-medalha{
        }

    
    }
    .content-description{
      display: flex;
      text-align: center;


  }      
  }

div.secundaria{
    background-color: var(--secundaria);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 225px;
    height: 225px;
    scale: 0.6;
    color: var(--neutral);
    opacity: 0.40;
    padding: 60px;

    .content-image{
      height: 225px;
      width: 225px;
      display: flex;
      justify-content: center;
      


    }
    .content-title{
      display: none;
  


    
    }
    .content-description{
      display: none;


  }      
  }
`

export {MedalhaCardPrincipal}