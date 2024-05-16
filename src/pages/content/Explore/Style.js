import styled from "styled-components";

const ExploreSectionStyled = styled.article`
display: flex;
justify-content: space-between;
padding-inline: 100px;
align-items: center;

height: 100%;
  .content-article {
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .article-text{
    display: flex;
    flex-direction: column;
    gap: 40px;

      h1{
        width: 300px;
        font-size: 2rem;
        font-weight: 600;
      }
      p{
        width: 400px;
  
      }
    }
  }

  .content-cta {
     position: relative;
  }
  .badge{
    width: 120px;
  }
  .cta-map {
    width: 290px;
    position: absolute;
    left: 60px;
    bottom: -100px;
  }

  .cta-box {
    margin-top: 100px;
    background-color: var(--primaria);
    border-radius: 20px;
    width: 600px;
    height: 160px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;  
    padding: 50px;
    .box-content{
      display:flex;
      flex-direction: column;
      width: 260px;
      height: 100%;
      justify-content: space-between;
      h2{
      color: var(--neutral);
      font-weight: 300;
      width: 200px;
    }
    }
  
  }

`

export {ExploreSectionStyled}