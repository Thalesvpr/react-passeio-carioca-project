import React from "react";
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import ExploreSection from "./content/Explore/Explore";
import ContatoSection from "./content/Contato/Contato";
import PasseiosSection from './content/Passeios/Passeios';
import AnunciantesSection from './content/Anunciantes/Anunciantes';
import BaixeAppSection from "./content/BaixeApp/BaixeApp";
import HeroSection from "./content/Hero/Hero";






const LandingPage = () => (
    <div className="container">
      <Header></Header>
      <HeroSection></HeroSection>
      <BaixeAppSection></BaixeAppSection>
      <ExploreSection></ExploreSection>
      <ContatoSection></ContatoSection>
      <AnunciantesSection></AnunciantesSection>
      <PasseiosSection></PasseiosSection>
      <Footer></Footer> 
    </div>

)

export default LandingPage;