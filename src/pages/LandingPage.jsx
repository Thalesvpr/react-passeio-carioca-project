import React from "react";
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import ExploreSection from "./content/Explore/Explore";
import ContatoSection from "./content/Contato/Contato";
import PasseiosSection from './content/Passeios/Passeios';
import BaixeAppSection from "./content/BaixeApp/BaixeApp";
import HeroSection from "./content/Hero/Hero";
import GameficacaoSection from "./content/Gameficacao/Gameficacao";
<<<<<<< HEAD
import { LandingStyled } from "./Style";
=======
import AnunciantesGuiaSection from "./content/AnunciantesGuias/AnunciantesGuia";


>>>>>>> f42d6dc180de61169d368b54d56d40ef692de2b7






const LandingPage = () => (
    <LandingStyled>
      <Header></Header>
      <div className="hero-dw">
      <HeroSection></HeroSection>
      <BaixeAppSection></BaixeAppSection>
      </div>
      <ExploreSection></ExploreSection>
      <ContatoSection></ContatoSection>
      <AnunciantesGuiaSection></AnunciantesGuiaSection>
      <PasseiosSection></PasseiosSection>
      <GameficacaoSection></GameficacaoSection>
      <Footer></Footer> 
<<<<<<< HEAD
    </LandingStyled>
=======
      
    </div>
>>>>>>> f42d6dc180de61169d368b54d56d40ef692de2b7

)

export default LandingPage;