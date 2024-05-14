import { MedalhaCardStyled } from "./Style"

const MedalhaCard = (props) => {

    return(
    <MedalhaCardStyled>
      <div className="content">
        <div className="content-image">
        {/* <img src={props.src} /> */}

        </div>
        <div className="content-title">
        <h3 className="title-medalha">Medalha</h3>
        <h3>{props.title}</h3>

        </div>
        <div className="content-description">
        <p>{props.description}</p>
        </div>
      </div>

     
    </MedalhaCardStyled>
    )
  }
  
  export default MedalhaCard;