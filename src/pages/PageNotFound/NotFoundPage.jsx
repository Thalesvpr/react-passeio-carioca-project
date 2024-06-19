import Header from "../../components/Header/Header";
import { TranslationsProvider } from "../../context/TranslationContext";
import BaixeAppSection from "../content/BaixeApp/BaixeApp";
import { NotFoundPageStyled } from "./Style";


const NotFoundPage = () => (
  <NotFoundPageStyled>
    <TranslationsProvider>
      <Header />
      <div className="not_found_bg">

      </div>
    </TranslationsProvider>
  </NotFoundPageStyled>
);

export default NotFoundPage;
