import styled from "styled-components";

const OutlineButtonStyled = styled.article`
button{
    font-size: 13px;
    color: var(--neutral); 
    background-color: transparent;
    cursor: pointer;
    padding: 6px 20px;
    border: none;
    &:hover{
        border-bottom: 2px solid #fff;  
    }
    

}
`
const SecondLineButtonStyled = styled.article`

button{
    font-size: 13px;
    color: var(--contrast);
    background-color: var(--neutral);
    cursor: pointer;
    padding: 6px 20px;
    border: none;
    border-radius: 20rem;
    

}
`

const ThirdLineButtonStyled = styled.article`

button{
    font-size: 13px;
    color: var(--neutral);
    background-color: var(--primaria);
    cursor: pointer;
    padding: 6px 20px;
    border: none;
    border-radius: 20rem;
    

}
`

export {OutlineButtonStyled, SecondLineButtonStyled,ThirdLineButtonStyled};