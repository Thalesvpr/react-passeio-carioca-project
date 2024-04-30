import { SecondLineButton } from "../Button/Button";
import {InputFieldStyled} from "./Style";

export const InputField = (props) => {
    return (
    <InputFieldStyled>
        <h1>
            {props.titulo}


        </h1>
        <input

            type = "text"
            placeholder = {props.placeholder}        
        
        
        />
            


    </InputFieldStyled>

  );   
};
