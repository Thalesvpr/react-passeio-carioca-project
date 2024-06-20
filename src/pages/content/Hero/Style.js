import styled from "styled-components";

const HeroSectionStyled = styled.article`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-inline: 100px;

  .content-cta {
    /* Adicione estilos para content-cta, se necessário */
  }

  .splash_screen {
    position: absolute;
    width: 300px;
    height: auto;
    right: 160px;
    top: 210px;
  }

  div.content-text {
    margin-top: 200px;
    width: 100%;
    color: var(--neutral);

    h1,
    h2 {
      width: 500px;
      font-weight: 300;
    }

    span {
      font-weight: 500;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  .blackbirds {
    position: absolute;
    width: 400px;
    height: auto;
    pointer-events: none;
    opacity: 50%;
    left: 25%;
    bottom: -90px;
  }

  @media (max-width: 480px) {
    
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-inline: 10px;
    .splash_screen {
        display: none
  }

  div.content-text {
    text-align: center;
    margin-top: 140px;
    color: var(--neutral);
    display: flex;
    flex-direction: column;
    align-items: center;
    h1,
    h2 {
      width: 300px;
      font-weight: 300;
    }

    span {
      font-weight: 500;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  .blackbirds {
    position: absolute;
    width: 400px;
    height: auto;
    pointer-events: none;
    opacity: 50%;
    left: 25%;
    bottom: -90px;
  }
  }
`;

export { HeroSectionStyled };
