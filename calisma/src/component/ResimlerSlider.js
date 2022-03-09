import React from "react";
import "../App.css";
import { useState } from "react";

function ResimlerSlider(props) {
  const [index, setindex] = useState(0);

  const Fotograflar =  props.Fotograf;

  const Baslik= props.Baslik;

  return (
    <div className="ResimSlider">
      <h1>{Baslik} Fotografları</h1>
      <div className="HaberFotografi">
        <img src={Fotograflar[index]}></img>
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
                onClick={() => setindex(index)}
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
