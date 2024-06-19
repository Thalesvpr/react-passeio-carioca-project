import Header from "../../components/Header/Header";
import { TranslationsProvider } from "../../context/TranslationContext";
import BaixeAppSection from "../content/BaixeApp/BaixeApp";
import HeroSection from "../content/Hero/Hero";
import { LandingStyled } from "../Style";


const DownloadAppPage = () => (
  <LandingStyled>
    <TranslationsProvider>
      <Header />
      <div className="hero-dw" id="hero">
        <section id="baixeoapp">
        <BaixeAppSection/>
        </section>
      </div>
    </TranslationsProvider>
  </LandingStyled>
);

export default DownloadAppPage;
