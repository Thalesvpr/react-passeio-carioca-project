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
      height: 500px;
      padding: 0px;
      background: red;
    }
    .slick-arrow {
        display: none !important;
    }
    .slider{
        background-color: #aff;
        display: flex;
    }
    div.content{
        /* height: 600px; */
        /* width: 100%; */
        background-color: #f00;
        padding: auto;
    }
    div.slide-content{
        background-color: #000 !important;
        height: 300px;
        width: 300px;;

    }

`
export {CarrouselStyled};