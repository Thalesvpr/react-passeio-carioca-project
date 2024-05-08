import React, { useState } from 'react';
import { SecondLineButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { AnunciantesGuiaSectionStyled } from "./Style"; 
import Modal from "../../../components/Modal/Modal"; 

const AnunciantesGuiaSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [opinModal, setOpinModal] = useState(false);

  return (
    <SectionBase>
      <AnunciantesGuiaSectionStyled>
        <div className="section-title">
          <h1>Ja pensou em ampliar a visibilidade do seu negocio ??</h1>
        </div>
        <div className="section-anunciante-content">
          <div className="content-anunciante-cta">
            <h2 className="content-anunciante-subtitle">
              Conecte Sua Marca com Aventureiros
            </h2>
            <p className="content-anunciante-text">
              Aumente a visibilidade da sua empresa.
            </p>
            <p className="content-anunciante-subtext">
              Ofereça promoções, se destaque no mapa e acesse dados valiosos
              sobre seus potenciais clientes.
            </p>
            <div className="content-anunciante-button">
              <SecondLineButton onClick={() => setOpenModal(!openModal)}>
                Para Anunciantes
              </SecondLineButton>
              <Modal isOpen={openModal}>
                <div>
                  {<h1>Formulário Anunciantes</h1>}
                </div>
              </Modal>
            </div>
          </div>
          <div className="section-guia-content">
            <div className="content-guia-cta">
              <h2 className="content-guia-subtitle">Amplie Seu Alcance Online</h2>
              <p className="content-guia-text">
                Conecte-se com turistas e moradores.{" "}
              </p>
              <p className="content-guia-subtext">
                Cadastre-se hoje e comece a oferecer seus passeios guiados
                através do Passeio Carioca.
              </p>
              <div className="content-guia-button">
                <SecondLineButton onClick={() => setOpinModal(!opinModal)}>
                  Para Guias de Turismo
                </SecondLineButton>
                <Modal isOpen={opinModal}>
                  <div className='div-guia-modal'>
                    <h1>Formulário Guias  </h1>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </AnunciantesGuiaSectionStyled>
    </SectionBase>
  );
};

export default AnunciantesGuiaSection;