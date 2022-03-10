import React from "react";
import "../App.css";
import { useState,useEffect  } from "react";

function ResimlerSlider(props) {
  const [index, setindex] = useState(0);

  const Fotograflar = props.Fotograf;

  const Baslik = props.Baslik;
console.log(index)
  return (
    <div className="ResimSlider">
      <h1>{Baslik} Fotografları</h1>


      <div  className="HaberFotografi">
        <object   className="HaberFotografi"  controls muted data={Fotograflar[index]}  ></object  >
      </div >


      <div className="KucukFotograflar">
        <ul>
          {Fotograflar.map((Fotograf, index) => {
            return (
              <li
                className="ResimSliderFotografCard "
                onClick={() => setindex(index)  }
              >
                <object controls muted data={Fotograflar[index]}></object>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ResimlerSlider;
