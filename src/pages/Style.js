import styled from "styled-components"

const LandingStyled = styled.article`
    /* overflow: hidden; */
div.hero-dw{
    background-color: #5EA7C6;
    background-size: cover;
    border-radius: 0px 0px 100px 100px;
    position: relative;
    overflow: hidden

}
.prediohome{
    pointer-events: none;
    width: 400px;
    height: auto;
    position: absolute;
    bottom: 0;
}

.folhasleft {
    pointer-events: none;
    width: 700px;
    height: auto;
    position: absolute;
    z-index: auto;
    top: -550px;
    transform: translateX(-60%);
}

.folhasright {
    pointer-events: none;
    width: auto;
    height: 700px;
    position: absolute;
    z-index: auto;
    top: -500px;
    right: 0;
    transform: translateX(60%);
}


#explore {
    position: relative;

    .folhasleft {
    pointer-events: none;
    width: 700px;
    height: auto;
    position: absolute;
    z-index: auto;
    top: -550px;
    transform: translateX(-60%);
}
}







`


export {LandingStyled}