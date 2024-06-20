import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { IconButton } from '../Button/Button';
import { TranslationsContext } from '../../context/TranslationContext';

const PlanosCarousel = () => {
  const { locale } = useContext(TranslationsContext);
  const planos = [
    {
      titulo: {
        en: 'Bronze',
        de: 'Bronze',
        fr: 'Bronze',
        es: 'Bronce',
        pt: 'Bronze'
      },
      descricao: {
        en: [
          "> We tell the story of your establishment, including photos.",
          "> We highlight your establishment on our map.",
        ],
        de: [
          "> Wir erzählen die Geschichte Ihres Unternehmens, einschließlich Fotos.",
          "> Wir heben Ihr Unternehmen auf unserer Karte hervor.",
        ],
        fr: [
          "> Nous racontons l'histoire de votre établissement, photos incluses.",
          "> Nous mettons en avant votre établissement sur notre carte.",
        ],
        es: [
          "> Contamos la historia de tu establecimiento, incluyendo fotos.",
          "> Destacamos tu establecimiento en nuestro mapa.",
        ],
        pt: [
          "> Contamos a história do seu estabelecimento, incluindo fotos.",
          "> Colocamos seu estabelecimento em destaque no nosso mapa.",
        ],
      },
      corFundo: '#4F5BCA',
      corTexto: '#B9772A'
    },
    {
      titulo: {
        en: 'Silver',
        de: 'Silber',
        fr: 'Argent',
        es: 'Plata',
        pt: 'Prata'
      },
      descricao: {
        en: [
          "> Includes benefits of the Bronze Plan.",
          "> The story of your establishment is told in an engaging way.",
          "> We offer a link to your social media or a QR code, to be displayed at the establishment.",
        ],
        de: [
          "> Enthält Vorteile des Bronzeplans.",
          "> Die Geschichte Ihres Unternehmens wird ansprechend erzählt.",
          "> Wir bieten einen Link zu Ihren sozialen Medien oder einen QR-Code, der im Unternehmen angezeigt wird.",
        ],
        fr: [
          "> Inclut les avantages du plan Bronze.",
          "> L'histoire de votre établissement est racontée de manière engageante.",
          "> Nous offrons un lien vers vos réseaux sociaux ou un QR code, à afficher dans l'établissement.",
        ],
        es: [
          "> Incluye los beneficios del plan Bronze.",
          "> La historia de tu establecimiento se cuenta de una manera atractiva.",
          "> Ofrecemos un enlace a tus redes sociales o un código QR, para ser mostrado en el establecimiento.",
        ],
        pt: [
          "> Inclui vantagens do Plano Bronze.",
          "> História do seu estabelecimento contada de forma envolvente.",
          "> Oferecemos um link para sua rede social ou um QR code, a ser apresentado no estabelecimento.",
        ],
      },
      corFundo: '#4F5BCA',
      corTexto: '#858585'
    },
    {
      titulo: {
        en: 'Gold',
        de: 'Gold',
        fr: 'Or',
        es: 'Oro',
        pt: 'Ouro'
      },
      descricao: {
        en: [
          "> Includes benefits of the Bronze and Silver Plans.",
          "> Establishment included in the gamification of the application.",
          "> Link to the establishment's website or QR code available.",
        ],
        de: [
          "> Enthält Vorteile der Bronze- und Silberpläne.",
          "> Einrichtung in die Gamifizierung der Anwendung einbezogen.",
          "> Link zur Website des Unternehmens oder QR-Code verfügbar.",
        ],
        fr: [
          "> Inclut les avantages des plans Bronze et Argent.",
          "> Établissement inclus dans la gamification de l'application.",
          "> Lien vers le site de l'établissement ou QR code disponible.",
        ],
        es: [
          "> Incluye los beneficios de los planes Bronze y Silver.",
          "> Establecimiento incluido en la gamificación de la aplicación.",
          "> Enlace al sitio web del establecimiento o código QR disponible.",
        ],
        pt: [
          "> Inclui vantagens dos Planos Bronze e Prata.",
          "> Estabelecimento incluso na gamificação do aplicativo.",
          "> Link para o site do estabelecimento ou QR code disponível.",
        ],
      },
      corFundo: '#4F5BCA',
      corTexto: '#ffd700'
    },
    {
      titulo: {
        en: 'Diamond',
        de: 'Diamant',
        fr: 'Diamant',
        es: 'Diamante',
        pt: 'Diamante'
      },
      descricao: {
        en: [
          "> Includes benefits of the Bronze, Silver, and Gold Plans.",
          "> Creation of an exclusive medal for your establishment.",
          "> Inclusion of your establishment in one of our guided in-person tours.",
        ],
        de: [
          "> Enthält Vorteile der Bronze-, Silber- und Goldpläne.",
          "> Erstellung einer exklusiven Medaille für Ihr Unternehmen.",
          "> Einbeziehung Ihres Unternehmens in eine unserer geführten persönlichen Touren.",
        ],
        fr: [
          "> Inclut les avantages des plans Bronze, Argent et Or.",
          "> Création d'une médaille exclusive pour votre établissement.",
          "> Inclusion de votre établissement dans l'une de nos visites guidées en personne.",
        ],
        es: [
          "> Incluye los beneficios de los planes Bronze, Silver y Gold.",
          "> Creación de una medalla exclusiva para tu establecimiento.",
          "> Inclusión de tu establecimiento en una de nuestras visitas guiadas en persona.",
        ],
        pt: [
          "> Inclui vantagens dos Planos Bronze, Prata e Ouro.",
          "> Criação de uma medalha exclusiva para o seu estabelecimento.",
          "> Inclusão do seu estabelecimento em um dos nossos passeios presenciais guiados.",
        ],
      },
      corFundo: '#4F5BCA',
      corTexto: 'var(--lightBlue)'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? planos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === planos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <CarouselContainer>
      <NavButton left onClick={handlePrev}><BsChevronLeft /></NavButton>
      <CarouselSlide corFundo={planos[currentIndex].corFundo} corTexto={planos[currentIndex].corTexto}>
        <div className='plano'>
          <h3>{planos[currentIndex].titulo[locale]}</h3>
        </div>
        <Descricao>
          {planos[currentIndex].descricao[locale].map((e, index) => (
            <p key={index}>{e}</p>
          ))}
        </Descricao>
      </CarouselSlide>
      <NavButton right onClick={handleNext}><BsChevronRight /></NavButton>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
@media (max-width: 480px) {
    width: 350px ;
    margin-top: 35px;
  
  }

  position: relative;
  width: 100%;
  max-width: 458px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselSlide = styled.div`
  background-color: 
  #6FB5D2;
  
  padding: 20px;
  border-radius: 29px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 20px;
  margin: 10px;
  .plano {
    padding-inline: 12px;
    padding-block: 7px;
    background-color: var(--neutral);
    border-radius: 19px;
    h3 {
      color: ${({ corTexto }) => corTexto || 'inherit'};
      font-weight: 400;
      font-size: 16px;
    }
  }
`;

const Descricao = styled.div`
  color: white;
  p {
    margin-bottom: 10px;
  }
`;

const NavButton = styled(IconButton)`
  background-color: #6FB5D2;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => left ? 'left: -40px;' : ''}
  ${({ right }) => right ? 'right: -40px;' : ''}
  &:hover {
    background-color: #22318C;
  }

  @media (max-width: 480px) {
    display: none; 

  }
`;

export default PlanosCarousel;
