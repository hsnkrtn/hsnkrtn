import React, { Component ,useEffect  } from "react";
import { useLocation } from "react-router-dom";

function Yonetim(props) {
  const location = useLocation();
  const Gelenveriler =  location.state.Gonderilenveriler;
  const Baslik = location.state.Baslik;
  const BashekimKey =location.state.BashekimKey;

useEffect(() => {
  window.scrollTo(0, 0);
});
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <h1>{Baslik}</h1>

        <ul className="YonetimCards">
          {Gelenveriler.map((Gelenveriler, index) => {
            return (
              
              <li
                className= { BashekimKey ?  "BashekimSayfasi": "cardyonetim" }
                style={{
                  backgroundImage: `url(${Gelenveriler.Fotograf})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div  className= { BashekimKey ?  "BashekimSayfasiBilgiler": "infoyonetim"}>
                  <h1 className= { BashekimKey ?  "BashekimSayfasiBilgilertitle": "title"}>
                    {Gelenveriler.unvan} {Gelenveriler.Adi}{" "}
                  </h1>
                  <div className= { BashekimKey ?  "BashekimSayfasiBilgilerDetay": "titlemetin"}>
                    <p1 > {Gelenveriler.Hakkinda} </p1>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Yonetim;
