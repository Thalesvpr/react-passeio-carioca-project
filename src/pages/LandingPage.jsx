import React from "react";
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import ExploreSection from "./content/Explore/Explore";
import ContatoSection from "./content/Contato/Contato";
import PasseiosSection from './content/Passeios/Passeios';
import BaixeAppSection from "./content/BaixeApp/BaixeApp";
import HeroSection from "./content/Hero/Hero";
import GameficacaoSection from "./content/Gameficacao/Gameficacao";

import { LandingStyled } from "./Style";

import AnunciantesGuiaSection from "./content/AnunciantesGuias/AnunciantesGuia";




const LandingPage = () => (
    <LandingStyled>
      <Header></Header>
      <div className="hero-dw">
      <HeroSection></HeroSection>
      <BaixeAppSection></BaixeAppSection>
      </div>
      <ExploreSection></ExploreSection>
      <GameficacaoSection></GameficacaoSection>
      <AnunciantesGuiaSection></AnunciantesGuiaSection>
      <PasseiosSection></PasseiosSection>
      <ContatoSection></ContatoSection>
      <Footer></Footer>
    </LandingStyled>

      
    


)

export default LandingPage;