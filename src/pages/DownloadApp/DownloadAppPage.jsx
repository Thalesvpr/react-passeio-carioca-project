import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { TranslationsProvider } from "../../context/TranslationContext";
import BaixeAppSection from "../content/BaixeApp/BaixeApp";
import HeroSection from "../content/Hero/Hero";
import { DownloadAppStyled } from "./Style";


const DownloadAppPage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
      navigate(path);
      
  };
  return (
  <DownloadAppStyled>
    <TranslationsProvider>
        <section id="baixeoapp">
      <div className="hero-dw" id="hero">
        <BaixeAppSection/>
  
      </div>
      <PrimaryButton onClick={() => navigateTo("/")}>Voltar pra Home</PrimaryButton>
        </section>

    </TranslationsProvider>
  </DownloadAppStyled>)}


export default DownloadAppPage;
