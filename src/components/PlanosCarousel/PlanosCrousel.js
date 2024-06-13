import React, { useState } from 'react';
import styled from 'styled-components';

const PlanosCarousel = () => {
  const planos = [
    {
      titulo: 'Bronze',
      descricao: 'Contamos a história do seu estabelecimento (incluindo fotos) e o colocamos em destaque no nosso mapa, por meio de um pin diferenciado com o seu logo. ',
      corFundo: '#4F5BCA',
      corTexto: '#cc9933' 
    },
    {
      titulo: 'Prata',
      descricao: ' Vantagem do Plano Bronze, além da inclusão, após a história do estabelecimento, do "Viva essa Experiência", com um link para a sua rede social ou com um QR code, a ser apresentado no seu estabelecimento, que pode incluir um desconto ou um prêmio para o turista ou morador da cidade.',
      corFundo: '#4F5BCA',
      corTexto: '#c0c0c0'
    },
    {
      titulo: 'Ouro',
      descricao: 'Vantagens dos Planos Bronze e Prata, além da inclusão do seu estabelecimento na gameficação do aplicativo, com a possibilidade do turista realizar checkin presencial no local e divulgar em suas redes sociais. Haverá, também, um link para o site do seu estabelecimento ou um QR code, a ser apresentado no local, que pode conter um desconto ou um prêmio para o turista ou morador da cidade.',
      corFundo: '#4F5BCA',
      corTexto: '#ffd700' 
    },
    {
      titulo: 'Diamante',
      descricao: 'Vantagens dos Planos Bronze, Prata e Ouro, além da criação de uma medalha para o seu estabelecimento, a ser conquistada pelo turista ou morador da cidade, por meio de checkins. Haverá, também, a inclusão do seu estabelecimento em um dos nossos passeios presenciais guiados (sob análise a depender do local e do guia de turismo)',
      corFundo: '#4F5BCA',
      corTexto: '#87CEEB' 
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
      <CarouselSlide corFundo={planos[currentIndex].corFundo} corTexto={planos[currentIndex].corTexto}>
        <h3>{planos[currentIndex].titulo}</h3>
        <Descricao>{planos[currentIndex].descricao}</Descricao>
      </CarouselSlide>
      <NavButton left onClick={handlePrev}>{'<'}</NavButton>
      <NavButton right onClick={handleNext}>{'>'}</NavButton>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 458px; /* Largura ajustada conforme necessário */
  height: 320px; /* Altura ajustada conforme necessário */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselSlide = styled.div`
  background-color: ${({ corFundo }) => corFundo};
  color: ${({ corTexto }) => corTexto};
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  height: calc(100% - 40px); /* Ajuste para deixar espaço para os botões de navegação */
  flex: 1; 
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
