import styled from "styled-components";

export const GuiasSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5EA7C6;
  height: 100%; 

  .Guias {
    background-color: #5EA7C6;
    padding: 16px;
    color: white;
    text-align: center;
    width: 100%; 
    height: 100%; 
  }

  .G1,
  .G2 {
    margin: 0;
    font-size: 27px;
    font-weight: bold;
  }

  .G2 {
    margin-bottom: 20px;
  }

  p {
    margin: 10px 0;
  }

  button {
    margin-top: 20px;
  }

  h1.session-title {
    font-size: 35px;
    margin: 0; /* Remove all margin */
    padding: 20px 20px 10px 20px; /* Adjust padding for spacing */
    color: white;
    background-color: #5ea7c6;
    text-align: center; /* Ensure the text is centered */
    width: 100%; /* Ensure it takes the full width of the parent container */
    height: 100%; /* Ensure it takes the full height of the parent container */
  }

  /* Estilo específico para o modal aberto */
  .modal-open {
    overflow: hidden;
  }
`;
