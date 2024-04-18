import styled from "styled-components";

const FooterStyled = styled.article`
    height: 300px;
    width: 100%;
    background-color: var(--primaria);
    z-index: 10;
    div.content-socials{
        color: black;
        background-color: yellow;
    }
    div.nav{
        display: flex;
        background-color: green;
    }
    div.socials-links{
        background-color:pink;
        margin: 10px;
    }
    div.content{
        background-color: grey;
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding: 50px;
        align-items: center;
    }
    div.box{
        height: 100px;
        background-color: purple;
    }
    div.content-downloadlogo{
        background-color: blue;
        margin: 10px;
    }
        
`




export {FooterStyled}
