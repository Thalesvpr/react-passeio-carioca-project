import styled from "styled-components";

const ContatoSectionStyled = styled.article`
z-index: 0;
background-color: #000;
position: relative;

.lapa{
    position: absolute;
    width: 1000px;
    height:auto;
    top: 100px;
    right: 1px;
    z-index: 1;
}
div.section-content {display: flex;
    color: var(--neutral);
    background-color: var(--lightBlue);
    justify-content: space-between;
    padding: 120px;
    border-radius: 20px;
    
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    margin: auto;
    width: 1000px;

}

div.content-form{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 420px;
    z-index: 999;
    h1{
        font-size: 2rem;
        font-weight: 300;
    }
}
`
export { ContatoSectionStyled };
