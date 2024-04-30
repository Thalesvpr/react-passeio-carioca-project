import styled from "styled-components";

const HeaderStyled = styled.article`
    height: 100px;
    width: 100%;
    background-color: var(--primaria);
    position: fixed;
    z-index: 10;
    div.content{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 50px;
        
    }
    div.nav{
        display: flex;
    }
    h1{
        color: white;
        padding-left: 65px;
    }

`




export {HeaderStyled}