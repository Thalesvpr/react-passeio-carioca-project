import React, { useRef } from "react";
import Slider from "react-slick";

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
    <div className="slider-container">
      <Slider ref={sliderRef} {...props.settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
            <h3>{slide}</h3>
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
  );
}

export default Carrousel;