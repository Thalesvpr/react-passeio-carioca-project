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
import GuiasSection from "./content/GuiasdeTurismo/Guias";





const LandingPage = () => (
  <LandingStyled>
    <TranslationsProvider>
      <Header />
      <div className="hero-dw" id="hero">
        <HeroSection />
        <section id="baixeoapp">
        <BaixeAppSection/>
        </section>
      </div>
      <section id="explore">
        <ExploreSection />
      </section>
      <section id="gameficacao">
        <GameficacaoSection />
      </section>
      <GuiasSection></GuiasSection>
      <section id="anunciantes">
        <AnunciantesGuiaSection />
      </section>
      <section id="passeios">
        <PasseiosSection />
      </section>
      <section id="faleconosco">
        <ContatoSection />
      </section>
      <Footer />
    </TranslationsProvider>
  </LandingStyled>
);

export default LandingPage;
