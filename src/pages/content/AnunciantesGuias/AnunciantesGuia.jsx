import React, { useState, useContext } from "react";
import { NeutralButton } from "../../../components/Button/Button";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { AnunciantesGuiaSectionStyled } from "./Style";
import Modal from "../../../components/Modal/Modal";
import { createGlobalStyle } from "styled-components";
import { InputFieldStyled } from "../../../components/InputField/Style";
import { TranslationsContext } from "../../../context/TranslationContext";

const GlobalStyles = createGlobalStyle`
  body.modal-open {
    overflow: hidden;
  }
`;

const AnunciantesGuiaSection = () => {
  
  const [openModal, setOpenModal] = useState(false);
  const [opinModal, setOpinModal] = useState(false);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('fisica');
  
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
    document.body.classList.add("modal-open");
  };

  const openGuiaModal = () => {
    setOpinModal(true);
    document.body.classList.add("modal-open");
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nome, cpf, email, endereco, cep, rua, numero, complemento, cidade, bairro, estado, tipoPessoa });
  };

  const { locale } = useContext(TranslationsContext);

  const translations = {
    en: {
      parceriasTitle: 'Have you ever thought about increasing the visibility of your business?',
      nameLabel: 'Name:',
      cpfLabel: 'CPF:',
      emailLabel: 'E-mail:',
      enderecoLabel: 'Address:',
      cepLabel: 'CEP:',
      ruaLabel: 'Street:',
      numeroLabel: 'Number:',
      complementoLabel: 'Complement:',
      cidadeLabel: 'City:',
      bairroLabel: 'District:',
      estadoLabel: 'State:',
      fisicaLabel: 'Physical Person',
      juridicaLabel: 'Legal Person',
      submitButton: 'Submit',
      guiasFormTitle: 'Tour Guides Form',
      anunciantesFormTitle: 'Advertisers Form',
      AmplieSeu: 'Extend your Online Reach',
      conect:'Connect with tourists and locals alike.',
      cadastre:'Sign up today and start offering your guided tours through Passeio Carioca.',
      se:' ',
      ConecteSuaMarca:'Connect Your Brand with Adventurers',
      ParaGuiasdeTurismo:'For Tour Guides',
      Aumente:"Increase your company's visibility.",
      Ofereça:'Offer promotions, stand out on the map, and access valuable data about your prospects.',
      ParaAnunciantes:'For Advertisers'
    },
    pt: {
      parceriasTitle: 'Ja pensou em ampliar a visibilidade do seu negocio ??',
      nameLabel: 'Nome:',
      cpfLabel: 'CPF:',
      emailLabel: 'E-mail:',
      enderecoLabel: 'Endereço:',
      cepLabel: 'CEP:',
      ruaLabel: 'Rua:',
      numeroLabel: 'Número:',
      complementoLabel: 'Complemento:',
      cidadeLabel: 'Cidade:',
      bairroLabel: 'Bairro:',
      estadoLabel: 'Estado:',
      fisicaLabel: 'Pessoa Física',
      juridicaLabel: 'Pessoa Jurídica',
      submitButton: 'Enviar',
      guiasFormTitle: 'Formulário para Guias de Turismo',
      anunciantesFormTitle: 'Formulário para Anunciantes',
      AmplieSeu: 'Amplie Seu',
      AlcanceOnline: 'Alcance Online',
      conect:'Conecte-se com turistas e moradores. ',
      cadastre: 'Cadastre-se hoje e comece a oferecer seus passeios guiados através do Passeio Carioca.',
      ConecteSuaMarca:'Conecte Sua Marca',
      comAventureiros:'com Aventureiros',
      ParaGuiasdeTurismo:'Para Guias de Turismo',
      Aumente:'Aumente a visibilidade da sua empresa.',
      Ofereça:'Ofereça promoções, se destaque no mapa e acesse dados valiosos sobre seus potenciais clientes.',
      ParaAnunciantes:'Para Anunciantes',
    },

    es: {
      parceriasTitle: '¿Has pensado alguna vez en aumentar la visibilidad de tu negocio?',
      nameLabel: 'Nombre:',
      cpfLabel: 'CPF:',
      emailLabel: 'E-mail:',
      enderecoLabel: 'Dirección:',
      cepLabel: 'CEP:',
      ruaLabel: 'Calle:',
      numeroLabel: 'Número:',
      complementoLabel: 'Complemento:',
      cidadeLabel: 'Ciudad:',
      bairroLabel: 'Vecindario:',
      estadoLabel: 'Estado:',
      fisicaLabel: 'Persona Física',
      juridicaLabel: 'Persona Jurídica',
      submitButton: 'Enviar',
      guiasFormTitle: 'Formulario para Guías de Turismo',
      anunciantesFormTitle: 'Formulario para Anunciantes',
      AmplieSeu: 'Amplíe su',
      AlcanceOnline: 'Alcance en línea',
      conect:'Conéctese con turistas y lugareños por igual. ',
      cadastre: 'Inscríbete hoy y empieza a ofrecer tus visitas guiadas por el Passeio Carioca.',
      ConecteSuaMarca:'Conecta tu Marca',
      comAventureiros:'con Aventureros',
      ParaGuiasdeTurismo:'Para Guías Turísticos',
      Aumente:'Aumenta la visibilidad de tu empresa.',
      Ofereça:'Ofrece promociones, destaca en el mapa y accede a datos valiosos sobre tus clientes potenciales.',
      ParaAnunciantes:'Para Anunciantes'
    },

    de: {
      parceriasTitle: "Beende deine Herausforderungen, um dieses Ziel zu erreichen und zum nächsten überzugehen.",
      titleLabel: 'Haben Sie daran gedacht, die Sichtbarkeit Ihres Unternehmens zu erhöhen?',
      nameLabel: 'Name:',
      cpfLabel: 'CPF:',
      emailLabel: 'E-Mail:',
      enderecoLabel: 'Adresse:',
      cepLabel: 'PLZ:',
      ruaLabel: 'Straße:',
      numeroLabel: 'Nummer:',
      complementoLabel: 'Ergänzung:',
      cidadeLabel: 'Stadt:',
      bairroLabel: 'Stadtteil:',
      estadoLabel: 'Staat:',
      fisicaLabel: 'Natürliche Person',
      juridicaLabel: 'Juristische Person',
      submitButton: 'Senden',
      guiasFormTitle: 'Formular für Reiseführer',
      anunciantesFormTitle: 'Formular für Werbetreibende',
      AmplieSeu: 'Erweitern Sie Ihre',
      AlcanceOnline: 'Online-Reichweite',
      conect: 'Verbinden Sie sich mit Touristen und Einheimischen.',
      cadastre: 'Registrieren Sie sich noch heute und beginnen Sie, Ihre geführten Touren über Passeio Carioca anzubieten.',
      ConecteSuaMarca: 'Verbinden Sie Ihre Marke',
      comAventureiros: 'mit Abenteurern',
      ParaGuiasdeTurismo: 'Für Reiseführer',
      Aumente: 'Erhöhen Sie die Sichtbarkeit Ihres Unternehmens.',
      Ofereça: 'Bieten Sie Sonderangebote an, heben Sie sich auf der Karte hervor und greifen Sie auf wertvolle Daten über Ihre potenziellen Kunden zu.',
      ParaAnunciantes:'Für Werbetreibende',
    },

    fr: {
      parceriasTitle: "Terminez vos défis pour atteindre cet objectif et passer au suivant.",
      titleLabel: 'Avez-vous déjà pensé à augmenter la visibilité de votre entreprise ?',
      nameLabel: 'Nom :',
      cpfLabel: 'CPF :',
      emailLabel: 'E-mail :',
      enderecoLabel: 'Adresse :',
      cepLabel: 'Code postal :',
      ruaLabel: 'Rue :',
      numeroLabel: 'Numéro :',
      complementoLabel: 'Complément :',
      cidadeLabel: 'Ville :',
      bairroLabel: 'Quartier :',
      estadoLabel: 'État :',
      fisicaLabel: 'Personne physique',
      juridicaLabel: 'Personne morale',
      submitButton: 'Envoyer',
      guiasFormTitle: 'Formulaire pour les guides touristiques',
      anunciantesFormTitle: 'Formulaire pour les annonceurs',
      AmplieSeu: 'Augmentez votre',
      AlcanceOnline: 'Portée en ligne',
      conect: 'Connectez-vous avec les touristes et les habitants.',
      cadastre: "Inscrivez-vous aujourd'hui et commencez à proposer vos visites guidées via Passeio Carioca.",
      ConecteSuaMarca: 'Connectez votre marque',
      comAventureiros: 'avec des aventuriers',
      ParaGuiasdeTurismo: 'Pour les guides touristiques',
      Aumente: 'Augmentez la visibilité de votre entreprise.',
      Ofereça: 'Proposez des promotions, démarquez-vous sur la carte et accédez à des données précieuses sur vos clients potentiels.',
      ParaAnunciantes:'Pour les Annonceurs',
    },


    
  };

  const texts = translations[locale];
    
  return (
    <>
      <GlobalStyles />
      <SectionBase>
        <AnunciantesGuiaSectionStyled>
          <div className="Section">
            <h1 className="title">{texts.parceriasTitle}</h1>
            <div className="content">
              <div className="Guias">
                <h1 className="HG1">{texts.AmplieSeu}</h1>
                <h1 className="HG2">{texts.AlcanceOnline}</h1>
                <p>{texts.conect}</p>
                <p className="bottom-paragraph">{texts.cadastre}</p>
                <p className="p2">{texts.se}</p>
                <NeutralButton onClick={openGuiaModal}>
                <div className="bottom">{texts.ParaGuiasdeTurismo}</div>
                </NeutralButton>
              </div>
              <div className="Anunciantes">
                <h1 className="AG1">{texts.ConecteSuaMarca}</h1>
                <h1 className="AG2">{texts.comAventureiros}</h1>
                <p>{texts.Aumente}</p>
                <p>{texts.Ofereça}</p>
                <NeutralButton onClick={openAnunModal}>
                  {texts.ParaAnunciantes}
                </NeutralButton>
              </div>
            </div>
          </div>
          <div className="closeOutside" onClick={CloseOpenModal}>
            <Modal isOpen={openModal} onClose={CloseOpenModal}>
              <div className="anun-modal" onClick={stopPropagation}>
                <h2 className="modal-title">{texts.anunciantesFormTitle}</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    {texts.nameLabel}
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                  </label>
                  <label>
                    {texts.cpfLabel}
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                  </label>
                  <label>
                    {texts.emailLabel}
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>
                  <label>
                    {texts.enderecoLabel}
                    <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                  </label>
                  <label>
                    {texts.cepLabel}
                    <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                  </label>
                  <label>
                    {texts.ruaLabel}
                    <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
                  </label>
                  <label>
                    {texts.numeroLabel}
                    <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                  </label>
                  <label>
                    {texts.complementoLabel}
                    <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                  </label>
                  <label>
                    {texts.cidadeLabel}
                    <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                  </label>
                  <label>
                    {texts.bairroLabel}
                    <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                  </label>
                  <label>
                    {texts.estadoLabel}
                    <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
                  </label>
                  <div className="radio-group">
                    <label>
                      <input type="radio" value="fisica" checked={tipoPessoa === 'fisica'} onChange={(e) => setTipoPessoa(e.target.value)} />
                      {texts.fisicaLabel}
                    </label>
                    <label>
                      <input type="radio" value="juridica" checked={tipoPessoa === 'juridica'} onChange={(e) => setTipoPessoa(e.target.value)} />
                      {texts.juridicaLabel}
                    </label>
                  </div>
                  <button type="submit">{texts.submitButton}</button>
                </form>
              </div>
            </Modal>
          </div>
          <div className="closeOutside" onClick={CloseOpinModal}>
            <Modal isOpen={opinModal} onClose={CloseOpinModal}>
              <div className="guia-modal" onClick={stopPropagation}>
                <h2 className="modal-title">{texts.guiasFormTitle}</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    {texts.nameLabel}
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                  </label>
                  <label>
                    {texts.cpfLabel}
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                  </label>
                  <label>
                    {texts.emailLabel}
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>
                  <label>
                    {texts.enderecoLabel}
                    <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                  </label>
                  <label>
                    {texts.cepLabel}
                    <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                  </label>
                  <label>
                    {texts.ruaLabel}
                    <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
                  </label>
                  <label>
                    {texts.numeroLabel}
                    <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                  </label>
                  <label>
                    {texts.complementoLabel}
                    <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                  </label>
                  <label>
                    {texts.cidadeLabel}
                    <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                  </label>
                  <label>
                    {texts.bairroLabel}
                    <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                  </label>
                  <label>
                    {texts.estadoLabel}
                    <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
                  </label>
                  <div className="radio-group">
                    <label>
                      <input type="radio" value="fisica" checked={tipoPessoa === 'fisica'} onChange={(e) => setTipoPessoa(e.target.value)} />
                      {texts.fisicaLabel}
                    </label>
                    <label>
                      <input type="radio" value="juridica" checked={tipoPessoa === 'juridica'} onChange={(e) => setTipoPessoa(e.target.value)} />
                      {texts.juridicaLabel}
                    </label>
                  </div>
                  <button type="submit">{texts.submitButton}</button>
                </form>
              </div>
            </Modal>
          </div>
        </AnunciantesGuiaSectionStyled>
      </SectionBase>
    </>
  );
};

export default AnunciantesGuiaSection;
