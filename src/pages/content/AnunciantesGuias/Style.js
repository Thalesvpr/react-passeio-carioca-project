import styled from "styled-components";

const AnunciantesGuiaSectionStyled = styled.article`

  div.section-title {
    background-color: none;
    display: flex;
    color: var(--contrast);
    font-size: 16px; 
    line-height: 1.5; 
  }

  div.section-anunciante-content {
    background-color: var(--primaria);
    color: var(--neutral);
    display: flex;
  }

  div.content-anunciante-cta {
    margin-top: 150px;
    margin-left: 200px;
    text-align: right;
    height: 500px;
    font-size: 14px; 
    line-height: 1.5; 
  }

  h2.content-anunciante-subtitle {
    font-size: 18px; 
    line-height: 1.5; 
  }

  p.content-anunciante-text {
    font-size: 14px; 
    line-height: 1.5; 
  }

  p.content-anunciante-subtext {
    font-size: 14px; 
    line-height: 1.5; 
  }

  div.content-anunciante-button {
    padding-top: 109px;
  }

  div.content-table {
    height: 400px;
    width: 720px;
    background-color: var(--secundaria);
    border-radius: 30px;
  }

  p.tabela {
    color: var(--primaria);
    font-size: 14px; 
    line-height: 1.5; 
  }

  div.section-guia-content {
    background-color: var(--primaria);
    color: var(--neutral);
    display: flex;
    justify-content: flex-end;
    margin-right: 220px;
  }

  div.content-guia-cta {
    margin-top: 150px;
    margin-left: 200px;
    text-align: left;
    font-size: 14px; 
    line-height: 1.5; 
  }

  h2.content-guia-subtitle {
    font-size: 18px; 
    line-height: 1.5; 
  }

  p.content-guia-text {
    font-size: 14px; 
    line-height: 1.5; 
  }

  p.content-guia-subtext {
    font-size: 14px; 
    line-height: 1.5; 
  }

  div.content-guia-button {
    padding-top: 80px;
  }
`;

export { AnunciantesGuiaSectionStyled };