import React from "react";
import "../App.css";
import { useState } from "react";

function ResimlerSlider(props) {
  const [ResimNumarasi, setResimNumarasi] = useState(0);

  const Fotograflar = props.Fotograf;

  const Baslik= props.Baslik;

  return (
    <div className="ResimSlider">
      <h1>{Baslik} Fotografları</h1>
      <div className="HaberFotografi">
        <img src={Fotograflar[ResimNumarasi]}></img>
      </div>

      <div className="HrStyle" >
        <hr></hr>{" "}
      </div>

      <div className="KucukFotograflar">
        <ul>
          {Fotograflar.map((Fotograf, index) => {
            return (
              <li
                className="ResimSliderFotografCard "
                onClick={() => setResimNumarasi(ResimNumarasi + 1)}
              >
                <img src={Fotograf}></img>
              </li>
            );
          })}
        </ul>
      </div>


  

   
      </div> 

  );
}

export default ResimlerSlider;
