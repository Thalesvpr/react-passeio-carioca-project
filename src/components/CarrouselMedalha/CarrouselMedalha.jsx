import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { CarrouselMedalhaStyled } from "./Style";
import { IconButton } from "../Button/Button";

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
    showDots: false,
    infinite: false,
    slideSpeed: 10,
    
    beforeChange: (current, next) => setSliderIndex(next),

    slidesToShow: 2,
    slidesToScroll: 1,
};


  return (
    <CarrouselMedalhaStyled>
        <IconButton onClick={previous}>
          {props.prevButtonLabel}
        </IconButton>

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
        <IconButton onClick={next}>
          {props.nextButtonLabel}
        </IconButton>
    </CarrouselMedalhaStyled>
  );
}

export default CarrouselMedalha;