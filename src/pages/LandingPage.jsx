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
import { TranslationsProvider } from "../context/TranslationContext";




const LandingPage = () => (
    <LandingStyled>
      <TranslationsProvider>
      <Header></Header>
      <div className="hero-dw">
      <HeroSection></HeroSection>
      <BaixeAppSection></BaixeAppSection>
      </div>
      <ExploreSection></ExploreSection>
      <GameficacaoSection></GameficacaoSection>
      <PasseiosSection></PasseiosSection>
      <AnunciantesGuiaSection></AnunciantesGuiaSection>
      <ContatoSection></ContatoSection>
      <Footer></Footer>
      </TranslationsProvider>
    </LandingStyled>

      
    


)

export default LandingPage;