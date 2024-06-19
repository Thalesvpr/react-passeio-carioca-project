import styled from "styled-components"

const NotFoundPageStyled = styled.article`
    /* overflow: hidden; */
    .not_found_bg{
        height: 100vh;
        width: 100vw;

        
        background-image: url(${process.env.PUBLIC_URL + "imagens/jpg/404.jpg"});
        background-size: cover;
    }


`


export {NotFoundPageStyled}