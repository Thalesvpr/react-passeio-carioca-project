import styled from "styled-components"

const DownloadAppStyled = styled.article`
    /* overflow: hidden; */
div.hero-dw{
    background-color: #5EA7C6;
    background-size: cover;
    border-radius: 0px 0px 100px 100px;
    @media (max-width: 768px) {
      border-radius: 0px 0px 50px 50px;
      padding: 15px;
    }

    @media (max-width: 480px) {
      border-radius: 0px 0px 50px 50px;
    }

}
#baixeoapp{
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    gap: 20px;
}


`


export {DownloadAppStyled}