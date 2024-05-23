import styled from "styled-components";

const AnunciantesGuiaSectionStyled = styled.article`
  div.Section {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1.title {
    font-size: 2rem;
    font-weight: 500;
    margin-block: 50px;
  }

  div.content {
    background-image: url("/imagens/png/bg-anunciantes.png");
    color: var(--neutral);
    background-size: auto 100% ;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
    width: 100%;
    height: 610px;
  
  }

  div.Anunciantes {
    justify-content: center;
    align-items: center;
    width: 500px;
    text-align: left;
  }

  div.Guias {
    justify-content: center;
    align-items: center;
    width: 500px;
    text-align: right;
  }

  .HG1, .HG2, .AG1, .AG2 {
    font-size: 24px;
  }

  .HG2, .AG2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  div.guia-modal, div.anun-modal {
    position: fixed;
    background: white;
    height: 650px;
    width: 550px;
    border-radius: 13px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    padding: 20px;
    overflow-y: auto;
    padding-inline: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: black;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: var(--primaria);
  }

  input, select {
    margin-top: 5px;
    padding: 8px;
    border: 1px solid var(--primaria);
    border-radius: 5px;
    font-size: 16px;
  }

  button[type="submit"] {
    background-color: var(--primaria);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
  }

  button[type="submit"]:hover {
    background-color: var(--secundaria);
  }

  div.radio-group {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .radio-group label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .radio-group input[type="radio"] {
    accent-color: var(--primaria);
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primaria);
    margin-bottom: 20px;
  }

 
`;

export { AnunciantesGuiaSectionStyled };
