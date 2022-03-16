import "../App.css";
import { useState, useEffect } from "react";

function ResimlerSlider(props) {
  const [DataNumber, setDataNumber] = useState(0);

  const Fotograflar = props.Fotograf;

  const Baslik = props.Baslik;



  return (
    <div className="ResimSlider">
      <h1>{Baslik} Fotografları</h1>

      <div className="MediaSliderImage">

        <img src={Fotograflar[DataNumber]}></img>
      </div>
      <hr></hr>

      <div className="KucukFotograflar">
        <ul>
          {Fotograflar.map((Fotograf, index) => {
            return (
              <li className="ResimSliderFotografCard ">
                <img 
                  onClick={() => setDataNumber(index)}
                  src={Fotograflar[index]}
                ></img>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ResimlerSlider;
