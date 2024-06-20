import styled from "styled-components";

const bg = `${process.env.PUBLIC_URL}/imagens/png/bg-anunciantes.png`;

const AnunciantesGuiaSectionStyled = styled.article`
  height: 100%;


  h1.title {
    font-size: 2rem;
    font-weight: 500;
  }



  div.Anunciantes {
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: left;
    background-color: var(--lightBlue);
    color: white;
    display: flex;
    height: 100%;
    gap: 100px;
    font-weight: 400;
  }

  .HG1,
  .HG2,
  .AG1,
  .AG2 {
    font-size: 27px;
    font-weight: 400;
  }

  .plan-section {
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .formcol {
    width: 400px;
  }

  form {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
  }

  .formpai {
    display: flex;
    width: 100%;
    gap: 130px;
    justify-content: center;
  }

  .formdetails {
    width: 100%;
  }

  .submit {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primaria);
    margin-bottom: 20px;
  }

  .plan-options {
    width: 100%;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  .plan-options h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .plan-options ul {
    list-style-type: none;
  }

  .plan-options li {
    font-size: 16px;
  }

  .plan.bronze {
    background-color: #cd7f32; /* Cor bronze */
    border-color: #cd7f32;
  }

  .plan.prata {
    background-color: #c0c0c0; /* Cor prata */
    border-color: #c0c0c0;
  }

  .plan.ouro {
    background-color: #ffd700; /* Cor ouro */
    border-color: #ffd700;
  }

  .plan.diamante {
    background-color: #007bff; /* Azul mais intenso para diamante */
    border-color: #007bff;
  }

  .texts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
  }

  .predioright {
    pointer-events: none;
    width: 400px;
    height: auto;
    position: absolute;
    top: -210px;
  }

  .predioleft {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 170px;
    height: auto;
    pointer-events: none;
    top: -180px;
    opacity: 60%;
  }

  .folhaslefta {
    pointer-events: none;
    width: 600px;
    height: auto;
    position: absolute;
    z-index: auto;
    top: -550px;
    transform: translateX(-70%);
  }

  .folhasrighta {
    pointer-events: none;
    width: auto;
    height: 600px;
    position: absolute;
    z-index: auto;
    top: -600px;
    right: 0;
    transform: translateX(70%);
  }

  @media (max-width: 480px) {
    div.Anunciantes {
      flex-direction: column-reverse;
    }

    .texts {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;
      width: 100%;
    }

    .predioright,
    .predioleft,
    .folhaslefta,
    .folhasrighta {
      display: none;
    }

    .plan-section {
      width: 100%;
    }

    .formpai {
      flex-direction: column;
      gap: 20px;
    }

    .formcol {
      width: 100%;
    }

    .texts {
      width: 100%;
    }
  }
`;

export { AnunciantesGuiaSectionStyled };
