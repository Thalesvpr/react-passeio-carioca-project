import styled from "styled-components";

export const InputFieldStyled = styled.article`
 width: 100%;
 margin: 0;
 
input{
    margin: 0;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: transparent;
    color: var(--neutral);
    cursor: text;
    border-color: var(--neutral);
    &::placeholder{
      color: var(--neutral);

    }
    &:focus{
        outline: none;
        border-color: var(--neutral);
    }
    

  }
`