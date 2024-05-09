import { MedelhaCardStyled } from "./Style"

const MedelhaCard = (props) => {

    return(
    <MedelhaCardStyled onClick={()=>{window.location = props.src}}>
      <h3>{props.titulo}</h3>
      <figure>
        <img src={props.src} />
        <figcaption dangerouslySetInnerHTML={{__html:props.agradecimento}}/>
      </figure>
      
    </MedelhaCardStyled>
    )
  }
  
  export default MedelhaCard;