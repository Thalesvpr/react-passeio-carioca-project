import { MedalhaCardStyled } from "./Style"

const MedalhaCard = (props) => {

    return(
    <MedalhaCardStyled>
      <div className="content">
        <div className="content-image">
        {/* <img src={props.src} /> */}

        </div>
        <div className="content-description">
        <h3>{props.description}</h3>
        </div>
      </div>

      
    </MedalhaCardStyled>
    )
  }
  
  export default MedalhaCard;