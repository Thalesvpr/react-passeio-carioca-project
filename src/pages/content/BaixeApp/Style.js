import styled from "styled-components"

const BaixeAppSectionStyled = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--neutral);

    div.content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 900px;
        gap: 60px;
        height: 100%;

        .content-text, p {
            text-align: center;
            h1{
                font-size: 2rem;
                font-weight: 300
            }
        }
        span{
            font-size: .8rem;
        }
        .content-plataform {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 60px;
        }
        .content-cta{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;

            justify-content: center;
            .cta-download{
                display: flex;
                gap: 30px;

            justify-content: center;
            }
        }
    }
`

export { BaixeAppSectionStyled }
