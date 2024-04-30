import { SecondLineButton } from "../Button/Button";
import {InputFieldStyled} from "./Style";

export const InputField = (props) => {
    return (
    <InputFieldStyled>
        <p>
            {props.titulo}
        </p>
        <input

            type = "text"
            placeholder = {props.placeholder}        
        
        
        />
            


    </InputFieldStyled>

  );   
};
