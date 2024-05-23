import styled from "styled-components";

const CarrouselStyled = styled.article`
display: flex;
justify-content: center;
align-items: center;
gap: 60px;
    .slick-slider{
        
    }

    .slick-slide > div {
      display: grid;
      place-items: center;
      width: 80%;
      margin-top: 50px;
      margin: auto;
      padding: 0px;
      /* background-color: red; */
      height: 600px !important;

    }
    .slick-arrow {
        display: none !important;
    }
    .slider{
        /* background-color: green; */
        display: flex;
        align-items: center;
    }
    .slide{
        /* background-color: blueviolet; */
        height: 100% !important;
    }
    div.content{

        /* background-color: blue; */

    }
    div.slide-content{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        img{
            width: 100%;
            height: 350px;
            object-fit: cover;
            border-radius: 10px;
        }
        .texts{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center
        }
        

    }

`
export {CarrouselStyled};