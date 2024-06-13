import styled from "styled-components";

export const GuiasSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  height: 100%; 

  background-color: var(--lightBlue);
  .Guias {
    padding: 16px;
    color: white;
    text-align: center;
    width: 100%; 
    height: 100%; 
    margin-top: 130px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .G1,
  .G2 {
    margin: 0;
    font-size: 27px;
    font-weight: 400;
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

  .sessiontitle {
    font-size: 32px;
    font-weight: 400;
    color: white;
    
  }

  /* Estilo específico para o modal aberto */
  .modal-open {
    overflow: hidden;
  }
`;
