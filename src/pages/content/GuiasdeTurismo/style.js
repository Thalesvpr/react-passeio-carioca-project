import styled from "styled-components";

export const GuiasSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  height: 100%;
  background-color: #5ea7c6;

  .Guias {
    color: white;
    text-align: center;
    width: 100%;
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

  .sessiontitle{
    font-size: 32px;
    font-weight: 400;
    color: white;
    text-align: center;
   
  }

  .modal-open {
    overflow: hidden;
  }

  @media (max-width: 480px) {
    .Guias {
      margin-top: 20px; 
    }

    .G1,
    .G2 {
      font-size: 20px; 
    }

    .sessiontitle {
      font-size: 24px;
    }

    button {
      margin-top: 10px;
    }
  }
`;
