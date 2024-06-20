import styled from "styled-components";

const BaixeAppSectionStyled = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--neutral);

  img {
    height: 100px;
    width: 100px;
  }

  div.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 900px;
    gap: 40px;
    height: 100%;
    padding: 20px;

    .content-text,
    p {
      text-align: center;
      margin: 20px 0;

      h1 {
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 20px;
      }
    }

    span {
      font-size: 0.8rem;
      margin-top: 10px;
    }

    .content-plataform {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 40px;
    }

    .content-cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      justify-content: center;

      .cta-download {
        display: flex;
        gap: 30px;
        justify-content: center;

        .download-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;

          img {
            height: 40px;
            width: 40px;
          }

          button {
            padding: 10px 20px;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    div.content {
      width: 100%;
      gap: 30px;
      align-items: center;
      padding: 0 10px;
      z-index: 10;
    justify-content: center;


      .content-text,
      p {
        text-align: center;
        width: 100%;
        margin: 20px 0;

        h1 {
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
      }

      span {
        font-size: 0.7rem;
        margin-top: 10px;
      }

      .content-plataform {
        flex-direction: row;
        gap: 30px;
        width: 100%;
        
      }
      .prediohome {
        z-index: 0;
      }

      .content-cta {
        gap: 20px;
        width: 100%;

        .cta-download {
          flex-direction: column;
          gap: 15px;
          justify-content: center;
          align-items: center;
          width: 100%;

          .download-item {
            gap: 15px;

            img {
              height: 30px;
              width: 30px;
            }

            button {
              font-size: 0.9rem;
              padding: 8px 16px;
            }
          }
        }
      }
    }

    img {
      display: none;
    }
  }

  @media (max-width: 360px) {
    div.content {
      gap: 20px;
      padding: 0 5px;

      .content-text,
      p {
        text-align: center;
        width: 100%;
        margin: 15px 0;

        h1 {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }
      }

      span {
        font-size: 0.6rem;
        margin-top: 10px;
      }

      .content-plataform {
        flex-direction: column;
        gap: 15px;
      }

      .content-cta {
        gap: 15px;

        .cta-download {
          flex-direction: column;
          gap: 10px;

          .download-item {
            gap: 10px;

            img {
              height: 25px;
              width: 25px;
            }

            button {
              font-size: 0.85rem;
              padding: 6px 12px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 280px) {
    div.content {
      gap: 15px;
      padding: 0 2px;

      .content-text,
      p {
        text-align: center;
        width: 100%;
        margin: 10px 0;

        h1 {
          font-size: 1.1rem;
          margin-bottom: 10px;
        }
      }

      span {
        font-size: 0.5rem;
        margin-top: 5px;
      }

      .content-plataform {
        gap: 10px;
      }

      .content-cta {
        gap: 10px;

        .cta-download {
          gap: 5px;

          .download-item {
            gap: 5px;

            img {
              height: 20px;
              width: 20px;
            }

            button {
              font-size: 0.8rem;
              padding: 5px 10px;
            }
          }
        }
      }
    }
  }
`;

export { BaixeAppSectionStyled };
