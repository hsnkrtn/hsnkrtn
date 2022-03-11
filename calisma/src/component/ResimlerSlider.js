import "../App.css";
import { useState, useEffect } from "react";

function ResimlerSlider(props) {
  const [DataNumber, setDataNumber] = useState(0);
  const [index, setindex] = useState();

  const Fotograflar = props.Fotograf;

  const Baslik = props.Baslik;

  useEffect(() => {
    setDataNumber(index)



  });

  console.log(DataNumber);

  return (
    <div className="ResimSlider">
      <h1>{Baslik} Fotografları</h1>

      <div className="HaberFotografi">

        <object className="MediaSliderImage" data={Fotograflar[DataNumber]}></object>
      </div>
      <hr></hr>

      <div className="KucukFotograflar">
        <ul>
          {Fotograflar.map((Fotograf, index) => {
            return (
              <li className="ResimSliderFotografCard ">
                <object 
                  onClick={() => setDataNumber(index)}
                  data={Fotograflar[index]}
                ></object>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ResimlerSlider;
