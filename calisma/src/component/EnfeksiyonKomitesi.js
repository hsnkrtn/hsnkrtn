import React, { useEffect } from "react";
import ekkuyeleri from "../component/Dosyalar/ekkuyeleri.pdf";            
import enfeksiyonKontrolKomitesiTalimatlari from "../component/Dosyalar/enfeksiyonKontrolKomitesiTalimatlari.pdf";            
import enfeksiyonkontrolkomitesiyönetmelik from "../component/Dosyalar/enfeksiyon+kontrol+komitesi+yönetmelik.pdf";            

import { useLocation } from "react-router-dom";

function EnfeksiyonKomitesi(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <div className="RouterSayfasiDetay">
        <div  className="EnfeksiyonKomitesiSayfasi" >  
          <h1> Enfeksiyon Komitesi</h1>
          <hr></hr>
          <h1>Üyeler </h1>
          <a href={ekkuyeleri} target="_blank">
          <p1>

            {" "}
            Fırat Üniversitesi Hastanesi Enfeksiyon Komitesi Üyeleri için
            tıklayın.
          </p1>
          </a>
          <h1>Talimatlar</h1>
<a href={enfeksiyonKontrolKomitesiTalimatlari} target="_blank">      
          <p1>
            {" "}
            Fırat Üniversitesi Hastanesi Enfeksiyon Komitesi Talimatları için
            tıklayın.
          </p1>
          </a>    
          <h1>Yönetmelik</h1>
          <a  href={enfeksiyonkontrolkomitesiyönetmelik} >   
          <p1>
            {" "}
            Fırat Üniversitesi Hastanesi Enfeksiyon Komitesi Yönetmeliği için
            tıklayın.
          </p1></a>
          <h1>GÖREVİMİZ</h1>
          <p1>
            {" "}
            Tüm hastane personelinin hastane enfeksiyonları konusunda bilgili ve
            duyarlı olmalarını sağlamak; tam bir iletişim ve işbirliği
            içerisinde çalışarak üstün kalitede hasta bakımına katkıda bulunmak;
            güvenilir, sürekli kendini yenileyen ve gelişen ihtiyaçlarına cevap
            verebilecek bir “ Hastane Enfeksiyon Kontrol Komitesi” olmaktır.
          </p1>
          <h1>AMACIMIZ</h1>
          <p1>
            {" "}
            Tüm hastane personelinin hastane enfeksiyonları konusunda bilgili ve
            duyarlı olmalarını sağlamak; tam bir iletişim ve işbirliği
            içerisinde çalışarak üstün kalitede hasta bakımına katkıda bulunmak;
            güvenilir, sürekli kendini yenileyen ve gelişen ihtiyaçlarına cevap
            verebilecek bir “ Hastane Enfeksiyon Kontrol Komitesi” olmaktır.
          </p1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnfeksiyonKomitesi;
