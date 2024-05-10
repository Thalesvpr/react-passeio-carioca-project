import React, { useState } from "react";
import { SecondLineButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { AnunciantesGuiaSectionStyled } from "./Style";
import Modal from "../../../components/Modal/Modal";
import ModalStyled from "../../../components/Modal/Style";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body.modal-open {
    overflow: hidden;
  }
`;

const AnunciantesGuiaSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [opinModal, setOpinModal] = useState(false);

  const CloseOpenModal = () => {
    setOpenModal(false);
    document.body.classList.remove('modal-open');
  };

  const CloseOpinModal = () => {
    setOpinModal(false);
    document.body.classList.remove('modal-open');
  };

  const openAnunModal = () => {
    setOpenModal(true);
    document.body.classList.add('modal-open');
  }

  const openGuiaModal = () => {
    setOpinModal(true);
    document.body.classList.add('modal-open');
  }

  return (
    <>
      <GlobalStyles />
      <SectionBase>
        <AnunciantesGuiaSectionStyled>
          <div className="section-title">
            <h1>Já pensou em ampliar a visibilidade do seu negócio??</h1>
          </div>
          <div className="section-anunciante-content">
            <div className="content-anunciante-cta">
              <h2 className="content-anunciante-subtitle">
                Conecte sua marca com aventureiros
              </h2>
              <p className="content-anunciante-text">
                Aumente a visibilidade da sua empresa.
              </p>
              <p className="content-anunciante-subtext">
                Ofereça promoções, se destaque no mapa e acesse dados valiosos
                sobre seus potenciais clientes.
              </p>
              <div className="content-anunciante-button">
                <SecondLineButton onClick={openAnunModal}>
                  Para Anunciantes
                </SecondLineButton>
              </div>
            </div>
            <div className="section-guia-content">
              <div className="content-guia-cta">
                <h2 className="content-guia-subtitle">
                  Amplie seu alcance online
                </h2>
                <p className="content-guia-text">
                  Conecte-se com turistas e moradores.
                </p>
                <p className="content-guia-subtext">
                  Cadastre-se hoje e comece a oferecer seus passeios guiados
                  através do Passeio Carioca.
                </p>
                <div className="content-guia-button">
                  <SecondLineButton onClick={openGuiaModal}>
                    Para Guias de Turismo
                  </SecondLineButton>
                </div>
              </div>
            </div>
          </div>
          <Modal isOpen={openModal} onClose={CloseOpenModal}>
            <ModalStyled>
              <div className="anun-modal">
                Form Anunciantes
                <div className="X-anun">
                  <button className="close-button-a" onClick={CloseOpenModal}>
                    X
                  </button>
                </div>
              </div>
            </ModalStyled>
          </Modal>
          <Modal isOpen={opinModal} onClose={CloseOpinModal}>
            <ModalStyled>
              <div className="guia-modal">
                Form Guia
                <div className="X-guia">
                  <button className="close-button-g" onClick={CloseOpinModal}>
                    X
                  </button>
                </div>
              </div>
            </ModalStyled>
          </Modal>
        </AnunciantesGuiaSectionStyled>
      </SectionBase>
    </>
  );
};

export default AnunciantesGuiaSection;