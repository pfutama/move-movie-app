import React, { useState } from "react";

import "../Styles/Carousel.css";
import { sliderData } from "./karosel";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Carrosell({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  }
  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="gambarku" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
}
export default Carrosell;
