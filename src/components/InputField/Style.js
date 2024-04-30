import styled from "styled-components";

export const InputFieldStyled = styled.article`
input{
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: transparent;
    color: var(--neutral);
    cursor: text;
    border-color: var(--neutral);
    &:focus{
        outline: none;
        border-color: var(--neutral);
    }
    

  }
`
// .input-container {
//     margin-bottom: 20px;
//   }
  
//   .input-container input {
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     font-size: 16px;
//     background-color: #f8f9fa;
//     color: #495057;
//   }
  
//   .input-container input:focus {
//     outline: none;
//     border-color: #007bff;
//     background-color: #fff;
//     color: #000;
//   }