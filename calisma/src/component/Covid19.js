import React, { useEffect } from "react";
import mesaidisi from "./Dosyalar/mesaidisi.pdf";
import Covid19NormallesmeSureciVealinacakTedbirler from "./Dosyalar/COVID-19 Normallesme Sureci ve Alinacak Tedbirler.pdf";
import Covid19Recete from "./Dosyalar/Covid19Recete.pdf";
import covidcalisan from "./Dosyalar/covidcalisan.pdf";
import covidacilcalisanlari from "./Dosyalar/covidacilcalisanlari.pdf";
import CovidPoliklinikCalisanlari from "./Dosyalar/CovidPoliklinikCalisanlari.pdf";
import covidrehber from "./Dosyalar/covidrehber.pdf";


function Covid19(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <section className="RouterSayfasiDetay">
          <ul  className="GereklıDokumanlarLıstesı" >

<h1>COVID-19 </h1>
            <a href={Covid19NormallesmeSureciVealinacakTedbirler} target="_blank">
              <li>
              COVID-19 Normalleşme Süreci ve Alınacak Tedbirler

              </li>
            </a>
            <a href={Covid19Recete} target="_blank">
              <li>
              COVID-19 Yatan Hasta İlaç İstemi ve Ayaktan Reçetesi İşlemleri

              </li>
            </a>
   
            <a href={covidcalisan} target="_blank">
              <li>
              COVID-19 Kapsamında Sağlık Çalışınları için Tedbirler

              </li>
            </a>
            <a href={covidacilcalisanlari} target="_blank">
              <li>
              COVID-19 Kapsamında Acil Çalışınları için Tedbirler

              </li>
            </a>
           
            <a href={CovidPoliklinikCalisanlari} target="_blank">
              <li>
              COVID-19 Kapsamında Poliklinik Çalışınları için Tedbirler

              </li>
            </a>
            <a href={covidrehber} target="_blank">
              <li>
              COVID-19 (SARS-CoV2 ENFEKSİYONU) REHBERİ

              </li>
            </a>
           
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Covid19;
