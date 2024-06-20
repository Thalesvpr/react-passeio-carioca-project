import styled from "styled-components";

const GameficacaoSectionStyled = styled.article`
  div.gameficacao-title {
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-inline: 120px;

    .gameficacao-description {
      width: 300px;

      .title-text {
        width: 300px;
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }

  div.section-gameficacao {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  .gameficacao-image {
    img {
      height: auto;
      width: 600px;
    }
  }

  div.gameficacao-card {
    background-color: none;
    display: flex;
    color: var(--contrast);
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    div.gameficacao-title {
      font-size: 20px;
      margin-inline: 20px; 
    }
  }

  @media (max-width: 480px) {
    div.section-gameficacao {
      padding: 0 20px;
      text-align: center;
      gap: 20px;
    }

    .gameficacao-image {
      img {
        max-width: 100%; 
        height: auto;
      }
    }
  }
`;

export { GameficacaoSectionStyled };
