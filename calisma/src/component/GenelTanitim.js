import React, { useEffect, useState } from "react";
import ResimlerSlider from "./ResimlerSlider";
import { useLocation } from "react-router-dom";

function GenelTanitim(props) {
  const location = useLocation();

  const Gelenveriler = location.state.Gonderilenveriler;

  const Baslik = Gelenveriler.Baslik;
  const Detay = Gelenveriler.Detay;
  const Gorsel = Gelenveriler.Gorseller;

  const id = Gelenveriler.id;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <div className="RouterSayfasiDetay">
            <img className="RouterSayfasiFotograf" src={Gorsel}></img>
            <div>
              <h1> {Baslik}</h1>
              <hr></hr>
              <p1> {Detay}</p1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default GenelTanitim;
