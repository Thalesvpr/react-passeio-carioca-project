import React, { useState, useContext } from "react";
import { NeutralButton } from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal"; // Certifique-se de que este componente está importado corretamente
import { TranslationsContext } from "../../../context/TranslationContext";
import { AnunciantesGuiaSectionStyled } from "./Style";
import PlanosCarousel from "../../../components/PlanosCarousel/PlanosCrousel";
import SectionBase from "../../../components/SectionBase/SectionBase";
import { InputField } from "../../../components/InputField/InputField";

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
      name: "Name",
      email: "Email",
      Celular: "Phone",
      Cep: "CEP",
      cidade: "City",
      endereco: "Address",
      placeholder: "Write here",
      submitButton: "Submit",
      ConecteSuaMarca: "Connect Your Brand",
      comAventureiros: "with Adventurers",
      Aumente: "Increase your company's visibility.",
      Ofereça: "Offer promotions, stand out on the map, and access valuable data about your potential customers.",
      ParaAnunciantes: "For Advertisers"
   



    },
    pt: {
      name: "Nome",
      email:"E-mail",
      Celular:"Celular",
      Cep:"CEP",
      cidade:'Cidade',
      endereco:"Endereço",
      placeholder: "Escreva aqui",
      submitButton: 'Enviar',
      ConecteSuaMarca:'Conecte Sua Marca',
      comAventureiros:'com Aventureiros',
      Aumente:'Aumente a visibilidade da sua empresa.',
      Ofereça:'Ofereça promoções, se destaque no mapa e acesse dados valiosos sobre seus potenciais clientes.',
      ParaAnunciantes:'Para Anunciantes',
    },

    es: {
      name: "Nombre",
      email: "Correo electrónico",
      Celular: "Teléfono",
      Cep: "CEP",
      cidade: "Ciudad",
      endereco: "Dirección",
      placeholder: "Escribe aquí",
      submitButton: "Enviar",
      ConecteSuaMarca: "Conecta tu marca",
      comAventureiros: "con aventureros",
      Aumente: "Aumenta la visibilidad de tu empresa.",
      Ofereça: "Ofrece promociones, destácate en el mapa y accede a datos valiosos sobre tus clientes potenciales.",
      ParaAnunciantes: "Para anunciantes"
      
  
    },

    de: {
      name: "Name",
      email: "E-Mail",
      Celular: "Handy",
      Cep: "CEP",
      cidade: "Stadt",
      endereco: "Adresse",
      placeholder: "Hier schreiben",
      submitButton: "Senden",
      ConecteSuaMarca: "Verbinden Sie Ihre Marke",
      comAventureiros: "mit Abenteurern",
      Aumente: "Erhöhen Sie die Sichtbarkeit Ihres Unternehmens.",
      Ofereça: "Bieten Sie Werbeaktionen an, heben Sie sich auf der Karte hervor und greifen Sie auf wertvolle Daten über Ihre potenziellen Kunden zu.",
      ParaAnunciantes: "Für Werbetreibende"
      
    },

    fr: {
      name: "Nom",
      email: "E-mail",
      Celular: "Téléphone",
      Cep: "CEP",
      cidade: "Ville",
      endereco: "Adresse",
      placeholder: "Écrivez ici",
      submitButton: "Envoyer",
      ConecteSuaMarca: "Connectez votre marque",
      comAventureiros: "avec des aventuriers",
      Aumente: "Augmentez la visibilité de votre entreprise.",
      Ofereça: "Proposez des promotions, démarquez-vous sur la carte et accédez à des données précieuses sur vos clients potentiels.",
      ParaAnunciantes: "Pour les annonceurs"
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
          <Modal backgroundColor = "var(--secundaria)" isOpen={isModalOpen} onClose={closeModalHandler}>
            <form onSubmit={handleSubmit}>
              <div className="formdetails">
              <h2>Cadastre-se como Anunciante</h2>
              <p>Incremente sua visibilidade e alcance potenciais clientes hoje mesmo</p>
              </div>
              <div className="formpai">
                <div className="formcol"> 
              <InputField
                            name = "name"
                            onChange={handleInputChange}
                            value={formData.name}
                            placeholder= {texts.placeholder}
                            titulo={texts.name}
                            />
               <InputField
                            name = "E-mail"
                            onChange={handleInputChange}
                            value={formData.email}
                            placeholder= {texts.placeholder}
                            titulo={texts.email}
                            />
               <InputField
                            name = "Celular"
                            onChange={handleInputChange}
                            value={formData.Celular}
                            placeholder= {texts.placeholder}
                            titulo={texts.Celular}
                            />
                          
              </div>
              <div className="formcol">
               <InputField
                            name = "Cep"
                            onChange={handleInputChange}
                            value={formData.cep}
                            placeholder= {texts.placeholder}
                            titulo={texts.Cep}
                            />
               <InputField
                            name = "Endereço"
                            onChange={handleInputChange}
                            value={formData.endereco}
                            placeholder= {texts.placeholder}
                            titulo={texts.endereco}
                            />
               <InputField
                            name = "Cidade"
                            onChange={handleInputChange}
                            value={formData.cidade}
                            placeholder= {texts.placeholder}
                            titulo={texts.cidade}
                            />
                  </div>
              </div>
              <div className="submit">
              <NeutralButton type="submit">
                            {texts.submitButton}
                        </NeutralButton></div>
            </form>
          </Modal>
          <div className="Planos">
            <PlanosCarousel>
              
            </PlanosCarousel>
          </div>
        <img className="folhaslefta" src={`${process.env.PUBLIC_URL}imagens/png/leavesleft.png`}/>
        <img className="folhasrighta" src={`${process.env.PUBLIC_URL}imagens/png/leavesright.png`}/>
        <img className="cordas" src={`${process.env.PUBLIC_URL}imagens/png/Camada_1 (3).png`}/>
        </div>

        <img className="predioright" src={`${process.env.PUBLIC_URL}imagens/png/predioright.png`}/> 
        <img className="predioleft" src={`${process.env.PUBLIC_URL}imagens/png/predioleft (1).png`}/>
    
      </AnunciantesGuiaSectionStyled>
    </SectionBase>
  );
};

export default AnunciantesSection;
