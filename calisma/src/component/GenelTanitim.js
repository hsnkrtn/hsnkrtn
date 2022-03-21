import React, { useEffect, useState } from "react";
import ResimlerSlider from "./ResimlerSlider";
import { useLocation } from "react-router-dom";

function GenelTanitim(props) {
  const location = useLocation();
  const Baslik = location.state.Baslik;
  const Detay = location.state.Detay;
  const Gorsel = location.state.Gorsel;
  let id = location.state.id;

  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <div className="RouterSayfasiDetay">
          {id === 'ResimlerVeVideolar' ? null : (
            <img className="RouterSayfasiFotograf" src={Gorsel}></img>
          )}

          <h1> {Baslik}</h1>
          <hr></hr>
          <p1> {Detay}</p1>
          {id === 'ResimlerVeVideolar' ? (
            <ResimlerSlider Fotograf={Gorsel} />
          ) : null}

          
        </div>
      </div>
    </div>
  );
}

export default GenelTanitim;
