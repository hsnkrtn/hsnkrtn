import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";
import DoktorlarCards from "../component/DoktorlarCards";
import ResimlerSlider from "./ResimlerSlider";

function Bolumler(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const location = useLocation();
  const Gelenveriler = location.state.Gonderilenveriler;
  const Baslik = Gelenveriler.BolumAdi;
  const Detay = Gelenveriler.Detay;
  const Doktorlar = Gelenveriler.Doktorlar;
  const BolumFotograflari = Gelenveriler.Gorseller;

  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <section className="RouterSayfasiDetay">
          <h1>{Baslik}</h1>
          <p1>{Detay} </p1>
          <hr></hr>
          <ResimlerSlider Baslik={Baslik} Fotograf={BolumFotograflari} />
        </section>
        <div className="BolumlerDoktorlar">
          <hr></hr>
          <h1 className="DoktolarBaslığı">{Baslik} Doktorları</h1>
          {Doktorlar.map((Doktor) => {
            return (
              <DoktorlarCards
                unvan={Doktor.unvan}
                Adi={Doktor.Adi}
                Fotograf={Doktor.Fotograf}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bolumler;
