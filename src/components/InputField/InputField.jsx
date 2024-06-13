import { NeutralButton } from "../Button/Button";
import {InputFieldStyled} from "./Style";

export const InputField = (props) => {
    return (
    <InputFieldStyled>
        <p>
            {props.titulo}
        </p>
        <input
            name = {props.name}
            onChange={(e) =>props.onChange(e)}           
            value = {props.value}
            type = "text"
            placeholder = {props.placeholder}        
        
        
        />
            


    </InputFieldStyled>

  );   
};
