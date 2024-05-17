import { ModalStyled } from "../Modal/Style";


import {
  OutlineButtonStyled,
  NeutralButtonStyled,
  PrimaryButtonStyled,
  IconButtonStyled,
} from "./Style";

export const OutlineButton = (props) => {
  return (
    <OutlineButtonStyled>
      <button>{props.children}</button>
    </OutlineButtonStyled>
  );
};

export const NeutralButton = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <NeutralButtonStyled>
      <button onClick={handleClick}>{props.children}</button>
    </NeutralButtonStyled>
  );


};

export const PrimaryButton = (props) => {
  return (
    <PrimaryButtonStyled>
      <button>{props.children}</button>
    </PrimaryButtonStyled>
  );
};

export const IconButton = (props) => {
  const handleClick = () => {
    if (props.onClick) {
    props.onClick();
  }
};
  return (
    <IconButtonStyled>
      <button onClick={handleClick}>{props.children}</button>
    </IconButtonStyled>
  );
};
