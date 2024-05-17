import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { CarrouselMedalhaStyled } from "./Style";

function CarrouselMedalha(props) {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const [sliderIndex, setSliderIndex] = useState(0)
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const slides = props.slides

  const settings = {

    centerMode: true,
    showDots: true,
    infinite: true,
    slideSpeed: 10,
    
    beforeChange: (current, next) => setSliderIndex(next),

    slidesToShow: 2,
    slidesToScroll: 1,
};


  return (
    <CarrouselMedalhaStyled>
        <button className="button" onClick={previous}>
          {props.prevButtonLabel}
        </button>

      <div className="content">
        <Slider className="slider" ref={sliderRef} {...settings}>

          {slides.map((slide, index) => (
            <div className="slide-content">
                          <div key={index} className={sliderIndex == index ? 'slide-active' : 'slide'}>
             {slide}
            </div>
            </div>
          ))}
        </Slider>
      </div>
        <button className="button" onClick={next}>
          {props.nextButtonLabel}
        </button>
    </CarrouselMedalhaStyled>
  );
}

export default CarrouselMedalha;