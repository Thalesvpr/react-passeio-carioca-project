import styled from "styled-components";

const bg = `${process.env.PUBLIC_URL}/imagens/png/bg-anunciantes.png`;

const AnunciantesGuiaSectionStyled = styled.article`
    height: 100%;

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
    background-image: url(${bg});
    color: var(--neutral);
    background-size: auto 100%;
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
    width: 100%;
    text-align: left;
    background-color: var(--lightBlue);
    color: white;
    display: flex;
    height: 100%;
    gap: 100px;
    font-weight: 400;
  }

  div.Guias {
    justify-content: center;
    align-items: center;
    width: 500px;
    text-align: right;
  }

  .HG1,
  .HG2,
  .AG1,
  .AG2 {
    font-size: 27px;
    font-weight: 400;
  }

  .HG2,
  .AG2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  div.anun-modal {
    position: fixed;
    background: white;
    height: 650px;
    width: 850px; /* Voltei para 850px, ajuste conforme necessário */
    border-radius: 13px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-content {
    display: flex;
    gap: 40px; /* Aumentei o espaçamento entre os elementos */
    margin-bottom: 20px; /* Adiciona espaço entre o formulário e os planos */
    align-items: flex-start; /* Alinha os itens no topo */
    justify-content: space-between; /* Distribui os elementos igualmente */
  }

  .form-section {
    flex: 1;
    padding: 10px;
    width: 50%; /* Distribui igualmente o espaço dentro do modal */
  }

  .plan-section {
    flex: 1;
    padding: 10px;
    width: 50%; /* Distribui igualmente o espaço dentro do modal */
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: black;
    width: 100%; /* Garante que o formulário ocupe toda a largura disponível */
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: var(--primaria);
  }

  input,
  select {
    margin-top: 5px;
    padding: 8px;
    border: 1px solid var(--primaria);
    border-radius: 5px;
    font-size: 16px;
    width: 100%; /* Faz os campos de entrada ocuparem toda a largura */
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
    align-self: flex-start; /* Alinha o botão à esquerda */
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

  .plan-options {
    width: 100%; /* Ajuste a largura para ocupar todo o espaço disponível */
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  .plan-options h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .pmodal {
    color: black;
  }

  .plan-options ul {
    list-style-type: none;
    padding-left: 0;
  }

  .plan-options li {
    margin-bottom: 8px;
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

  
`;

export { AnunciantesGuiaSectionStyled };
