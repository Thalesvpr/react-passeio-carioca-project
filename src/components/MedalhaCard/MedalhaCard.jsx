import { MedalhaCardPrincipal, MedalhaCardSecundaria} from "./Style"

const MedalhaCard = (props) => {

    return(
    <MedalhaCardPrincipal>
      <div className={props.estado}>
        <div className="content-image">
        <img src={props.src} /> 

        </div>
        <div className="content-title">
        <h3 className="title-medalha">Medalha</h3>
        <h3>{props.title}</h3>

        </div>
        <div className="content-description">
        <p>{props.description}</p>
        </div>
      </div>

     
    </MedalhaCardPrincipal>

    )
  }


  export default MedalhaCard;