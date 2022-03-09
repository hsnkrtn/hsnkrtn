import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Haberler from "./Haberler";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";
import HaberSlider from "./HaberSlider";
import ResimlerSlider from "./ResimlerSlider";

function HaberSayfası(props) {
  const location = useLocation();
  const Baslik = location.state.Baslik;
  const Detay = location.state.Detay;
  const HaberFotograf = location.state.Fotograf;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        


        <section className="RouterSayfasiDetay">
          
          <h1> {Baslik}</h1>
          <hr></hr>
          <p1> {Detay}</p1>
          <hr></hr>
       
          <ResimlerSlider Baslik="Haberin" Fotograf={HaberFotograf} />
   
        </section>
      
        <section className="RouterSayfasiDetay">
          <h1> Diger Haberler</h1>
          <HaberSlider></HaberSlider>{" "}
        </section>
       
      </div>
    </div>
  );
}

export default HaberSayfası;
