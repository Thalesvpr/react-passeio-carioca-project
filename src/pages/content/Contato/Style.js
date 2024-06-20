import styled from "styled-components";

const ContatoSectionStyled = styled.article`
  z-index: 0;
  background-color: #000;
  position: relative;

  .lapa {
    position: absolute;
    width: 1000px;
    height: auto;
    top: 100px;
    right: 1px;
    z-index: 1;
  }

  div.section-content {
    display: flex;
    color: var(--neutral);
    background-color: #5ea7c6;
    justify-content: space-between;
    padding: 120px;
    border-radius: 20px;

    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    max-width: 100%;
    box-sizing: border-box;
  }

  div.content-form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 420px;
    z-index: 999;

    h1 {
      font-size: 2rem;
      font-weight: 300;
    }
  }

  @media (max-width: 1024px) {
    .lapa {
      width: 800px;
      top: 80px;
    }

    div.section-content {
      padding: 80px;
      width: 800px;
    }
  }

  @media (max-width: 768px) {
    .lapa {
      width: 600px;
      top: 60px;
    }

    div.section-content {
      padding: 60px;
      width: 600px;
    }

    div.content-form {
      width: 100%;
      padding: 0 20px; 
    }
  }

  @media (max-width: 480px) {
    .lapa {
      width: 100%;
      top: 40px;
      right: 0;
    }

    div.section-content {
      padding: 40px;
      width: 100%;
    }

    div.content-form {
      width: 100%;
    }
  }
`;

export { ContatoSectionStyled };
