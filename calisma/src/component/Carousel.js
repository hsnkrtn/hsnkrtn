import React from "react";
import { images } from "./Helpers/CarouselData";
import { useState } from "react";
import "../App.css";

function Carousel() {
  const [imgNumber, setimgNumber] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[imgNumber].Resim})` }}
      ></div>

      <div
        className="LeftButton"
        onClick={() => {
          imgNumber > 0 && setimgNumber(imgNumber - 1);
        }}
      >
        <section className="LeftButtonInner"> <a>
          <span>
            <i className="fa fa-angle-left"></i>
          </span>
        </a>
         </section>
         
      </div>
    
      <div
        className="RightButton"
        onClick={() => {
          imgNumber < images.length -1 && 
          setimgNumber(imgNumber + 1);
        }}
      >
        <a>
          <span>
            <i className="fa fa-angle-right"></i>
          </span>
        </a>
      </div>

    </div>
  );
}

export default Carousel;
