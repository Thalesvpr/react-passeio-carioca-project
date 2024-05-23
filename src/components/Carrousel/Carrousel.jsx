import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import { CarrouselStyled } from "./Style";
import { IconButton } from "../Button/Button";
import { TranslationsContext } from "../../context/TranslationContext";

function Carrousel(props) {
  const {locale} = useContext(TranslationsContext)

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const slides = props.slides


  const settings = {

    centerMode: true,
    showDots: true,
    infinite: true,
    slideSpeed: 500,
    
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,


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

          {slides.map((slide, index) => {
            const texts = slide.translations[locale]
            return (
            <div key={index} className="slide">
              <div className="slide-content">
                <img src={slide.img} alt={slide.translations.pt.title} />
                  <div className="texts">
                  <h2>{texts.title}</h2>
                <p>{texts.description}</p>
                  </div>
              </div>
            </div>
          )})}
        </Slider>
      </div>
        <IconButton onClick={next}>
          {props.nextButtonLabel}
        </IconButton>
    </CarrouselStyled>
  );
}

export default Carrousel;