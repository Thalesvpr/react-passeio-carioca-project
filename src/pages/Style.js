import styled from "styled-components";

const LandingStyled = styled.article`
  /* overflow: hidden; */
  div.hero-dw {
    background-color: #5ea7c6;
    background-size: cover;
    border-radius: 0px 0px 100px 100px;
    position: relative;
    overflow: hidden;
    padding: 20px;
    /* display: flex;
    flex-direction: column;
    gap: 20px; */
    


    @media (max-width: 768px) {
      border-radius: 0px 0px 50px 50px;
      padding: 15px;
    }

    @media (max-width: 480px) {
      border-radius: 0px 0px 50px 50px;
    }
  }

  .prediohome {
    pointer-events: none;
    width: 400px;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;


    @media (max-width: 768px) {
      width: 250px;
        left: -70px;

    }
  }
`;

export { LandingStyled };
