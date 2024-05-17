import React, { useRef } from "react";
import Slider from "react-slick";
import { CarrouselStyled } from "./Style";
import { IconButton } from "../Button/Button";

function Carrousel(props) {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const slides = props.slides
  console.log(slides)

  const settings = {

    centerMode: true,
    showDots: true,
    infinite: true,
    slideSpeed: 500,
    
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,


    slidesToShow: 1,
    slidesToScroll: 1,
};


  return (
    <CarrouselStyled>
        <IconButton onClick={previous}>
          {props.prevButtonLabel}
        </IconButton>

      <div className="content">
        <Slider className="slider" ref={sliderRef} {...settings}>

          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-content">{index}</div>
            </div>
          ))}
        </Slider>
      </div>
        <IconButton onClick={next}>
          {props.nextButtonLabel}
        </IconButton>
    </CarrouselStyled>
  );
}

export default Carrousel;