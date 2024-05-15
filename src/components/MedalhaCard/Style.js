import styled from "styled-components";

const MedalhaCardStyled = styled.article`
  div.content{
    background-color: var(--secundaria);
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    position: relative;
    padding-block: 60px;
    justify-content: flex-end;
    color: var(--neutral);


    .content-image{
      height: 225px;
      width: 225px;
      background-color: yellow;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: -85px;
      border-radius: 20px;

    }
    .content-title{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 50px;
        .title-medalha{
          margin-bottom: 20px;
        }

    
    }
    .content-description{
      display: flex;
      text-align: center;


  }      
  }
`

export {MedalhaCardStyled}