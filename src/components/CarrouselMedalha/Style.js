import styled from "styled-components";

const CarrouselMedalhaStyled = styled.article`
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
      /* background: red; */
    }
    .slick-arrow {
        display: none !important;
    }
    .slider{
        /* background-color: #aff; */
        display: flex;
    }
    div.content{
        width: 600px;
    height: 450px;
        /* background-color: #f00; */
        padding: auto;
    }
    div.slide-content{
        transition: opacity 1s ease 0.8s, position 1s ease, transform 1s ease;

    }



    div.slide-active{

    transition: opacity 1s ease 1s, position 1s ease, transform 1s ease;

    background-color: var(--secundaria);
    padding-inline: 60px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 200px;
    position: relative;
    padding-block: 60px;
    justify-content: flex-end;
    color: var(--neutral);


    .content-image{
      height: 200px;
      width: 200px;
      display: flex;
      justify-content: center;
      position: absolute;
      top: -85px;
      border-radius: 20px;

    }
    .content-title{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 20px;
        .title-medalha{
        }

    
    }
    .content-description{
      display: flex;
      text-align: center;


  }      
  }

div.slide{
    transition: opacity 0.5s ease 0.2s, position 0.5s ease, transform 0.5s ease;

    background-color: var(--secundaria);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 225px;
    height: 225px;
    transform: scale(0.6);
    color: var(--neutral);
    opacity: 0.40;
    padding: 60px;

    .content-image{
      height: 225px;
      width: 225px;
      display: flex;
      justify-content: center;
      


    }
    .content-title{
      display: none;
  


    
    }
    .content-description{
      display: none;


  }      
  }

`
export {CarrouselMedalhaStyled};