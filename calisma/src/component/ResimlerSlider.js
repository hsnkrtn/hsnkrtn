import "../App.css";
import { useState, useEffect } from "react";

function ResimlerSlider(props) {
  const [DataNumber, setDataNumber] = useState(0);

  const Fotograflar = props.Fotograf;

  const Baslik = props.Baslik;

  useEffect(() => {});

  console.log(DataNumber);

  
  return (
    <div className="ResimSlider">
      <h1>{Baslik} Fotografları</h1>

      <div className="HaberFotografi">

        <video className="MediaSliderVideo"
        controls
        muted
          src={Fotograflar[DataNumber]}
        ></video>
        <img className="MediaSliderImage"
  
          src={Fotograflar[DataNumber]}
        ></img>


      </div>
      <hr></hr>

      <div className="KucukFotograflar"> 
        <ul>
          {Fotograflar.map((Fotograf, index) => {
            return (
              <li
                className="ResimSliderFotografCard "
                onClick={() => setDataNumber(index)}
              >
                <img  className="MediaSliderImage" src={Fotograflar[index]}></img>
                <video  className="MediaSliderVideo" src={Fotograflar[index]}></video>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ResimlerSlider;
