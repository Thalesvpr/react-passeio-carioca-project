import { ModalStyled } from "../Modal/Style";


import {
  OutlineButtonStyled,
  SecondLineButtonStyled,
  ThirdLineButtonStyled,
} from "./Style";

export const OutlineButton = (props) => {
  return (
    <OutlineButtonStyled>
      <button>{props.children}</button>
    </OutlineButtonStyled>
  );
};

export const SecondLineButton = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <SecondLineButtonStyled>
      <button onClick={handleClick}>{props.children}</button>
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
