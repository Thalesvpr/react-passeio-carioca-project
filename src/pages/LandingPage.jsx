import React from "react";
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import ExploreSection from "./content/Explore/Explore";
import ContatoSection from "./content/Contato/Contato";
import PasseiosSection from './content/Passeios/Passeios';
import AnunciantesSection from './content/Anunciantes/Anunciantes';
import GameficacaoSection from "./content/Gameficacao/Gameficacao";






const LandingPage = () => (
    <div className="container">
      <Header></Header>

      <ExploreSection></ExploreSection>
      
      <ContatoSection></ContatoSection>
      <AnunciantesSection></AnunciantesSection>
      <PasseiosSection></PasseiosSection>
      <GameficacaoSection></GameficacaoSection>

      <Footer></Footer> 
    </div>

)

export default LandingPage;