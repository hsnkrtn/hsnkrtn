import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

function Iletisim(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <section className="RouterSayfasiDetay">
          <div className="IletisimSayfasi">
            <iframe
              title="GoogleHarita"
              className="harita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.6093589334732!2d39.20330651580714!3d38.68084487960478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c0895a19c2a3%3A0x56a2b23e62945af6!2sF%C4%B1rat+%C3%9Cniversitesi+Hastanesi!5e0!3m2!1str!2str!4v1515742266104"
            >
              {" "}
            </iframe>
            <hr></hr>
            <div className="HastaneIletisimSayfasi">
              <h1>Adres </h1>{" "}
              <p1>
                {" "}
                Üniversite Mahallesi Yahya Kemal Caddesi No:25 MERKEZ/ELAZIĞ{" "}
              </p1>{" "}
              <br></br>
              <h1>Telefon </h1> <p1> 0424 233 35 55</p1>
              <br></br>
              <h1>E-mail </h1> <p1> hastane@firat.edu.tr</p1>
              <br></br>
              <h1> Hesap Bilgileri</h1>
              <h1>Banka adı </h1>
              <p1> T.C. Ziraat Bankasi </p1>
              <br></br>
              <h1> Fırat Şubesi Hesap adı </h1>{" "}
              <p1>Fırat Üniversitesi Döner Sermaye İşletme Müdürlüğü </p1>{" "}
              <br></br>
              <h1>İban no </h1> <p1> TR860001001561135354675057</p1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Iletisim;
