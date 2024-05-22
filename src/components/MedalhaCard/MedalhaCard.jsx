import { MedalhaCardPrincipal, MedalhaCardSecundaria} from "./Style"
import { TranslationsContext } from "../../context/TranslationContext";

const MedalhaCard = (props) => {
  const {locale} = useContext(TranslationsContext);
  const texts = props.translations[locale]

    return(
    <MedalhaCardPrincipal>
      <div className={props.estado}>
        <div className="content-image">
        <img src={props.src} /> 

        </div>
        <div className="content-title">
        <h3 className="title-medalha">Medalha</h3>
        <h3>{texts.title}</h3>

        </div>
        <div className="content-description">
        <p>{texts.description}</p>
        </div>
      </div>

     
    </MedalhaCardPrincipal>

    )
  }


  export default MedalhaCard;