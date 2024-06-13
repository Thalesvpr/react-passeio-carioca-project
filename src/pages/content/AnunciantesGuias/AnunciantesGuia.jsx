import React, { useState, useContext } from "react";
import { NeutralButton } from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal"; // Certifique-se de que este componente está importado corretamente
import { TranslationsContext } from "../../../context/TranslationContext";
import { AnunciantesGuiaSectionStyled } from "./Style";
import PlanosCarousel from "../../../components/PlanosCarousel/PlanosCrousel";
import SectionBase from "../../../components/SectionBase/SectionBase";

const AnunciantesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cep: '',
    estado: '',
    cidade: '',
    endereco: ''
  });

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

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Exemplo simples de exibir os dados no console
    // Aqui você pode implementar a lógica para enviar os dados do formulário
    closeModalHandler(); // Fecha o modal após enviar o formulário
  };

  return (
    <SectionBase>
      <AnunciantesGuiaSectionStyled>
        <div className="Anunciantes">
          <div className="texts">
            <h1 className="AG1">{texts.ConecteSuaMarca}</h1>
            <h1 className="AG2">{texts.comAventureiros}</h1>
            <p className="AP1">{texts.Aumente}</p>
            <p>{texts.Ofereça}</p>
            <NeutralButton onClick={openModalHandler}>{texts.ParaAnunciantes}</NeutralButton>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nome">{texts.nameLabel}</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} />

              <label htmlFor="email">{texts.emailLabel}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />

              <label htmlFor="cep">{texts.cepLabel}</label>
              <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleInputChange} />

              <label htmlFor="estado">{texts.estadoLabel}</label>
              <input type="text" id="estado" name="estado" value={formData.estado} onChange={handleInputChange} />

              <label htmlFor="cidade">{texts.cidadeLabel}</label>
              <input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleInputChange} />

              <label htmlFor="endereco">{texts.enderecoLabel}</label>
              <input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleInputChange} />

              <button type="submit">{texts.submitButton}</button>
            </form>
          </Modal>
          <div className="Planos">
            <PlanosCarousel>
              {/* Conteúdo do carousel */}
            </PlanosCarousel>
          </div>
        </div>
      </AnunciantesGuiaSectionStyled>
    </SectionBase>
  );
};

export default AnunciantesSection;
