import React, { useState } from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { IconButton } from '../Button/Button';

const PlanosCarousel = () => {
  const planos = [
    {
      titulo: 'Bronze',
      descricao: [
    "> Contamos a história do seu estabelecimento,incluindo fotos.",
    "> Colocamos seu estabelecimento em destaque no nosso mapa.",
] ,
      corFundo: '#4F5BCA',
      corTexto: '#B9772A' 
    },
    {
      titulo: 'Prata',
      descricao:[
        "> Inclui vantagens do Plano Bronze.",
        "> História do seu estabelecimento contada de forma envolvente.",
        `> Oferecemos um link para sua rede social ou um QR code, a ser apresentado no estabelecimento.`,
        
    ],
      corFundo: '#4F5BCA',
      corTexto: '#858585'
    },
    {
      titulo: 'Ouro',
      descricao: [
        '> Inclui vantagens dos Planos Bronze e Prata.',
        '> Estabelecimento incluso na gamificação do aplicativo.',
        '> Link para o site do estabelecimento ou QR code disponível.',
       
    ],
      corFundo: '#4F5BCA',
      corTexto: '#ffd700' 
    },
    {
      titulo: 'Diamante',
      descricao: [
        "> Inclui vantagens dos Planos Bronze, Prata e Ouro.",
        "> Criação de uma medalha exclusiva para o seu estabelecimento.",
        "> Inclusão do seu estabelecimento em um dos nossos passeios presenciais guiados."
    ],
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
        <IconButton left onClick={handlePrev}><BsChevronLeft/></IconButton>
      <CarouselSlide corFundo={planos[currentIndex].corFundo} corTexto={planos[currentIndex].corTexto}>
        <div className='plano'>
        <h3 >{planos[currentIndex].titulo}</h3></div>
        <Descricao>{planos[currentIndex].descricao.map((e) => {
          return <p>{e}</p>


        })}</Descricao>
      </CarouselSlide>
      <IconButton right onClick={handleNext}><BsChevronRight/></IconButton>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 458px; 
  margin: 0 auto;
  display: flex;
  align-items: center;

  justify-content: center;

`;

const CarouselSlide = styled.div`
  background: #6FB5D2;
  padding: 20px;
  border-radius: 29px;
  height: calc(100% - 40px);
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
      color: ${({ corTexto }) => corTexto} ;
      font-weight: 400;
      font-size: 16px;
      
    }
  }
`;

const Descricao = styled.p`
  color: white; 
`;

const NavButton = styled.button`
  background-color: #5A64BF;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 20px; /* Aumento do border-radius para 20px */
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? 'left: -40px;' : '')}
  ${({ right }) => (right ? 'right: -40px;' : '')}

  &:hover {
    background-color: #22318C;
  }
`;

export default PlanosCarousel;
