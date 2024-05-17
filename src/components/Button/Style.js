import styled from "styled-components";

const OutlineButtonStyled = styled.article`
button{
    font-size: 13px;
    color: var(--neutral); 
    background-color: transparent;
    cursor: pointer;
    padding: 6px 20px;
    border: none;
    white-space: nowrap;
    &:hover{
        border-bottom: 2px solid #fff;  
    }
    

}
`
const NeutralButtonStyled = styled.article`

button{
    font-size: 13px;
    color: var(--contrast);
    background-color: var(--neutral);
    cursor: pointer;
    padding: 6px 20px;
    border: none;
    border-radius: 20rem;
    white-space: nowrap;

}
`

const PrimaryButtonStyled = styled.article`
button{
    white-space: nowrap;
    font-size: 13px;
    color: var(--neutral);
    background-color: var(--primaria);
    cursor: pointer;
    padding: 6px 20px;
    border: none;
    border-radius: 20rem;

    

}
`
const IconButtonStyled = styled.article`

button{
    color: var(--neutral);
    background-color: var(--secundaria);
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 15rem;
}
`

export {IconButtonStyled, OutlineButtonStyled, NeutralButtonStyled,PrimaryButtonStyled};