import React from "react";
import { useLocation } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";  
import DoktorlarCards from "../component/DoktorlarCards";

function Doktorlar(props) {
  const fotograflar = HastaneFotograflari[5].a;

  const location = useLocation();
  const Gelenveriler = location.state.Gonderilenveriler;
  const Baslik = Gelenveriler.BolumAdi;
  const Detay = Gelenveriler.Detay;
  const Doktorlar = Gelenveriler.Doktorlar;

  console.log(Doktorlar);

  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <img className="RouterSayfasiFotograf" src={fotograflar}></img>
        <section className="RouterSayfasiDetay">
          <h1>{Baslik}</h1>{" "}
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
        </section>
      </div>
    </div>
  );
}

export default Doktorlar;
