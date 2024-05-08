import React, { useRef } from "react";
import Slider from "react-slick";

function Carrousel({ slides, showDots, infinite, slideSpeed, slidesToShow, slidesToScroll, prevButtonLabel, nextButtonLabel }) {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: showDots,
    infinite: infinite,
    speed: slideSpeed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <h3>{slide}</h3>
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
          {prevButtonLabel}
        </button>
        <button className="button" onClick={next}>
          {nextButtonLabel}
        </button>
      </div>
    </div>
  );
}

Carrousel.defaultProps = {
  slides: [],
  showDots: true,
  infinite: true,
  slideSpeed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevButtonLabel: "Previous",
  nextButtonLabel: "Next"
};

export default Carrousel;