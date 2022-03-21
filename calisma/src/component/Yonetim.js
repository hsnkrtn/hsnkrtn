import React, { Component, useEffect } from "react";
import { useLocation } from "react-router-dom";

import organizasyonsemasi from "../component/Dosyalar/organizasyonsemasi.pdf";



function Yonetim(props) {
  const location = useLocation();
  const GelenVerilerKisiler = location.state.Gonderilenveriler.Kisiler;

  const Baslik = location.state.Gonderilenveriler.Baslik;
  const BashekimKey = location.state.BashekimKey;
  const id = location.state.Gonderilenveriler.id;
  console.log(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <div className="RouterSayfasiDetay">
          <h1>{Baslik}</h1>
     {  id === 'OrganizasyonSemasi' ? <a href={organizasyonsemasi}>  <p1>Organizasyon Şeması<span>                       <i class="fa fa-share"></i>
 </span> </p1>   </a>:null }
{  id === 'OrganizasyonSemasi'? null:

          <ul className="YonetimCards">
            {GelenVerilerKisiler.map((GelenVerilerKisiler, index) => {
              return (
                <li
                  className={BashekimKey ? "BashekimSayfasi" : "cardyonetim"}
                  style={{
                    backgroundImage: `url(${GelenVerilerKisiler.Fotograf})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={
                      BashekimKey ? "BashekimSayfasiBilgiler" : "infoyonetim"
                    }
                  >
                    <h1
                      className={
                        BashekimKey ? "BashekimSayfasiBilgilertitle" : "title"
                      }
                    >
                      {GelenVerilerKisiler.unvan} {GelenVerilerKisiler.Adi}{" "}
                    </h1>
                    <div
                      className={
                        BashekimKey
                          ? "BashekimSayfasiBilgilerDetay"
                          : "titlemetin"
                      }
                    >
                      <p1> {GelenVerilerKisiler.Hakkinda} </p1>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
}

        </div>
      </div>
    </div>
  );
}
export default Yonetim;
