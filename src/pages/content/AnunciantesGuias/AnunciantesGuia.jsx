import React, { useState } from "react";
import { NeutralButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { AnunciantesGuiaSectionStyled } from "./Style";
import Modal from "../../../components/Modal/Modal";
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
    document.body.classList.remove("modal-open");
  };

  const CloseOpinModal = () => {
    setOpinModal(false);
    document.body.classList.remove("modal-open");
  };

  const openAnunModal = () => {
    setOpenModal(true);
    document.body.classList.remove("modal-open");
  };

  const openGuiaModal = () => {
    setOpinModal(true);
    document.body.classList.add("modal-open");
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <GlobalStyles />
      <SectionBase>
        <AnunciantesGuiaSectionStyled>
          <div className="Section">
            <h1 className="title">Ja pensou em ampliar a visibilidade do seu negocio ??</h1>
            <div className="content">
              <div className="Guias">
              <h1 className="HG1">Amplie Seu </h1>
                          <h1 className="HG2">Alcance Online</h1>
              <p>Conecte-se com turistas e moradores.</p>
              <p>Cadastre-se hoje e comece a oferecer seus passeios guiados através do Passeio Carioca</p>

                    
                <NeutralButton onClick={openGuiaModal}>
                  Para Guias de Turismo
                </NeutralButton>
              
              </div>
        
              <div className="Anunciantes">
              <h1 className="AG1">Conecte Sua Marca  </h1>
              <h1 className="AG2">com Aventureiros</h1>
              <p>Aumente a visibilidade da sua empresa.</p>
              <p>Ofereça promoções, se destaque no mapa e acesse 
                dados valiosos sobre seus potenciais clientes.</p>
              
                <NeutralButton onClick={openAnunModal}>
                  Para Anunciantes
                </NeutralButton>
          
              </div>
            </div>
          </div>

          <div className="closeOutside" onClick={CloseOpenModal}>
            <Modal isOpen={openModal} onClose={CloseOpenModal}>
              <div className="anun-modal" onClick={stopPropagation}>
                Form Anunciantes
                <button className="close-button-a" onClick={CloseOpenModal}>
                  X
                </button>
              </div>
            </Modal>
          </div>
          <div className="closeOutside" onClick={CloseOpinModal}>
            <Modal isOpen={opinModal} onClose={CloseOpinModal}>
              <div className="guia-modal" onClick={stopPropagation}>
                Form Guia
                <button className="close-button-g" onClick={CloseOpinModal}>
                  X
                </button>
              </div>
            </Modal>
          </div>
        </AnunciantesGuiaSectionStyled>
      </SectionBase>
    </>
  );
};

export default AnunciantesGuiaSection;
