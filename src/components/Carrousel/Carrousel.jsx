import React, { useRef } from "react";
import Slider from "react-slick";
import { CarrouselStyled } from "./Style";

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
        <button className="button" onClick={previous}>
          {props.prevButtonLabel}
        </button>

      <div className="content">
        <Slider className="slider" ref={sliderRef} {...settings}>

          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-content">{index}</div>
            </div>
          ))}
        </Slider>
      </div>
        <button className="button" onClick={next}>
          {props.nextButtonLabel}
        </button>
    </CarrouselStyled>
  );
}

export default Carrousel;