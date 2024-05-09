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
console.log (slides)

  return (
  <CarrouselStyled>

    <div className="slider-container">
      <Slider ref={sliderRef} {...props.settings}>
      
      {slides.map((slide, index) => (
        <div key={index} className="slide">
            <div className="slide-content">{index}</div>
        </div>
        ))}
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
          {props.prevButtonLabel}
        </button>
        <button className="button" onClick={next}>
          {props.nextButtonLabel}
        </button>
      </div>
    </div>
        </CarrouselStyled>
  );
}

export default Carrousel;