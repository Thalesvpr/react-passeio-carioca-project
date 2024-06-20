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

    .article-text {
      display: flex;
      flex-direction: column;
      gap: 40px;
      text-align: center;

      h1 {
        width: 300px;
        font-size: 2rem;
        font-weight: 600;
      }

      p {
        width: 400px;
      }
    }
  }

  .content-cta {
    position: relative;
  }

  .badge {
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

    .box-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: flex-end;
      justify-content: space-around;

      h2 {
        color: var(--neutral);
        font-weight: 300;
        width: 200px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .content-article {
      margin-bottom: 20px;
      align-items: center;

      .article-text {
        h1 {
          width: 100%; /* Para ocupar toda a largura disponível */
          font-size: 1.5rem;
          text-align: center;
        }
        p {
          width: 100%; /* Para ocupar toda a largura disponível */
          font-size: 0.9rem;
          text-align: center;
        }
      }

      .badge {
        width: 80px;
      }
    }

    .content-cta {
      text-align: center;

      .cta-map {
        width: 250px;
        margin-bottom: 20px;
        left: auto;
        bottom: auto;
      }

      .cta-box {
        max-width: 300px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 20px;

    .content-article {
      .article-text {
        h1 {
          font-size: 1.5rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }

    .content-cta {
      .cta-map {
        width: 180px;
        margin-bottom: 20px;
      }

      .cta-box {
        max-width: 250px;
      }
    }
  }
`;

export { ExploreSectionStyled };
