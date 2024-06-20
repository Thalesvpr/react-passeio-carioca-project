import styled from "styled-components";

const ExploreSectionStyled = styled.article`
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;

  .content-article {
    
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
    padding: 50px;
    border-radius: 20px;
    width: 600px;
    height: 160px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;  
    .box-content{
      display:flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      
      align-items: flex-end;
      justify-content: space-around;
      h2{
      color: var(--neutral);
      font-weight: 300;
      width: 200px;
    }
    }
  
  }
  @media (max-width: 480px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0;
    padding-top: 60px;
    .content-article {
    padding: 20px;
    /* width: 100%; */
    /* width: 50vw; */

    flex-direction: column;
    
    
    .article-text{
      /* background-color: green; */
      gap: 40px;

      h1{
        /* width: 300px; */
        font-size: 1.5rem;
        font-weight: 600;
      }
      p{
        width: 200px;
        font-size: 0.8rem;
  
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
    width: 200px;
    position: absolute;
    left: 60px;
    bottom: -100px;
  }

  .cta-box {
    margin-top: 100px;
    background-color: var(--primaria);
    border-radius: 20px;
    width: 200px;
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
  }}

`

export { ExploreSectionStyled }