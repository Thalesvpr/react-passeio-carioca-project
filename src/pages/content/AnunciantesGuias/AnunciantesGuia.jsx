import React from "react";
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
  const [openModal, setOpenModal] = React.useState(false);
  const [opinModal, setOpinModal] = React.useState(false);

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
          <h1>Já pensou em ampliar a visibilidade do seu negócio??</h1>
          {/* anunciantes */}
          <div className="content">
            <div className="anunciantes">
              <h2 className="content-anunciante-subtitle">Conecte sua marca com aventureiros</h2>
              <p className="content-anunciante-text">Aumente a visibilidade da sua empresa.</p>
              <p className="content-anunciante-subtext">
                Ofereça promoções, se destaque no mapa e acesse dados valiosos
                sobre seus potenciais clientes.
              </p>
              <div className="content-anunciante-button">
                <NeutralButton onClick={openAnunModal}>
                  Para Anunciantes
                </NeutralButton>
              </div>
            </div>
            {/* guias */}

            <div className="guia">
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
                <NeutralButton onClick={openGuiaModal}>
                  Para Guias de Turismo
                </NeutralButton>
              </div>
            </div>


          </div>

        </AnunciantesGuiaSectionStyled>
      </SectionBase>
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
    </>
  );
};

export default AnunciantesGuiaSection;







