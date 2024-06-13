import styled from "styled-components";

const bg = `${process.env.PUBLIC_URL}/imagens/png/bg-anunciantes.png`;

const AnunciantesGuiaSectionStyled = styled.article`
    height: 100%;

  div.Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1.title {
    font-size: 2rem;
    font-weight: 500;
   
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

  

  .HG1,
  .HG2,
  .AG1,
  .AG2 {
    font-size: 27px;
    font-weight: 400;
  }

  .HG2,
  .AG2 {

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

  
`;

export { AnunciantesGuiaSectionStyled };
