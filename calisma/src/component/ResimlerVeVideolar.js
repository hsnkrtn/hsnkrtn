import React, { useEffect, useState } from "react";
import HastaneFotografları from "./HastaneFotografları";
import { useLocation } from "react-router-dom";

function ResimlerVeVideolar(props) {
  const location = useLocation();

  const Gelenveriler = location.state.Gonderilenveriler;


  const id = Gelenveriler.id;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <div className="RouterSayfasiDetay">
          <h1>Hastane Fotografları </h1>
          <div className="HastaneFotograflariVeVideolari">
            <ul>

              {Gelenveriler.Gorseller.map((Fotograf, index) => {
                return (
                  <li className="HastaneFotograflari ">
                    <img 

                    src={Fotograf}></img>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResimlerVeVideolar;
