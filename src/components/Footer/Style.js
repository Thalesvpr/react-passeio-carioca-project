import styled from "styled-components";

const FooterStyled = styled.article`
  width: 100%;
  position: absolute;
  z-index: 100;

  div.content-socials {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  div.nav {
    display: flex;
    padding-right: 100px;
    gap: 30px;
  }

  div.socials-links {
    margin: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 0;
    margin-bottom: 0;
  }

  div.content {
    background-image: url(${(props) => props.bgUrl});
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 90px;
  }

  div.box {
    height: 100px;
    background-color: var(--secundaria);
    border-radius: 16px;
    margin: 20px auto;
    width: 100%;
    max-width: 116px;
  }

  div.content-downloadlogo {
    margin: 10px;
  }

  div.boxlinks {
    background-color: none;
    height: 48px;
    width: 48px;
    border-radius: 13px;
    margin-right: 10px;
  }

  div.content-marcadagua {
    color: var(--neutral);
    display: flex;
    align-items: center;
    padding-right: 20px;
    margin-bottom: 40px;
    gap: 10px;
    margin-top: 80px;
  }
  .marcadagua{
    font-size: 30px;
  }

  .link {
    color: white;
    text-decoration: none;
  }

  .logo {
    height: 134px;
    width: auto;
    margin-bottom: 25px;
  }

  .modalfooter {
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 20;
    top: 0;
  }

 
  @media (max-width: 480px) {
    width: 100%; 
    left: 0; 

    div.nav {
      flex-direction: column;
      padding-right: 0;
      align-items: center;
      gap: 20px;
    }

    .logo {
      height: auto;
      width: 80%; 
      max-width: 200px; 
      margin-bottom: 10px; 
    }

    div.socials-links {
      margin: 5px;
      gap: 20px;
    }

    div.content-marcadagua {
      padding-right: 10px;
      margin-bottom: 20px;
      margin-top: 60px;
      align-items: center;
      text-align: center;
    }
    div.content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content-downloadlogo{
        align-items: center;
        text-align: center;
    }
    div.content-socials {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

export { FooterStyled };
