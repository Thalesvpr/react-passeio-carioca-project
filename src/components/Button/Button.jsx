import { OutlineButtonStyled, SecondLineButtonStyled, ThirdLineButtonStyled } from "./Style";

export const OutlineButton = (props) => {
    return (
    <OutlineButtonStyled>
        <button>{props.children}</button>
    </OutlineButtonStyled>

  );   
};

export const SecondLineButton = (props) => {
    return (
    <SecondLineButtonStyled>
        <button>{props.children}</button>
    </SecondLineButtonStyled>

  );   
};

export const ThirdLineButton = (props) => {
    return (
    <ThirdLineButtonStyled>
        <button>{props.children}</button>
    </ThirdLineButtonStyled>

  );   
};

