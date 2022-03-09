import React, { Component } from "react";
  import {HastaneFotograflari} from "./Helpers/HastaneResimlerData.js"
class Footer extends Component {
  render() {
    const Logo=HastaneFotograflari[0].Logo;
    return (
      <div className="Footer">
        <div className="footerInner">
          <div className="footerlogodetails">
            <img className="footerlogo" src={Logo}></img>
            <p1>
              <span>
                <i class="fa fa-envelope"></i> </span>  hastane@firat.edu.tr
            </p1>
            <br></br>
            <p1>
              <span>
                <i class="fa fa-phone"></i>{" "}
              </span>{" "}
              &nbsp; 0424 233 35 55
            </p1>
            <br></br>
            <p1>
              <span>
                <i class="fa fa-map"></i>
              </span>
              &nbsp; Üniversite Mahallesi Yahya Kemal Caddesi No:25
              MERKEZ/ELAZIĞ
            </p1>
            <br></br>
            <p1 className="SocialMedia">
              <span>
                <i className="fa fa-instagram"></i>{" "}
              </span>{" "}
              &nbsp; fuhastanesiresmihesap
            </p1>
          </div>
          <div className="OnemliLinkler">
            <ul className="OnemliLinklerListesi">
              <h1>Önemli Linkler </h1>
              <li>Fırat Üniversitesi </li>
              <li>Tıp Fakültesi </li>
              <li>İlaç Rehberi </li>
              <li>Beslenme Hizmetleri </li>
              <li>Ölüm Bildirim Sistemi </li>
              <li> KPY Sistemi Eğitim Videosu </li>
              <li>E-Reçete E-İmza İşlemleri </li>
              <li>EBYS </li>
              <li>Web Posta </li>
              <li>Döner Sermaye İşletme M.</li>
              <li>Bu Test Nerede?</li>
              <li> Yeni İş Göremezlik Rapor Uygulaması</li>
              <li>KPY Sistemi Eğitim Videosu</li>
            </ul>
          </div>
          <div className="Hizmetlerimiz">
            <ul className="HizmetlerimizListesi">
              <h1> Hizmetlerimiz</h1>
              <li>Hastalarımız İçin </li>
              <li>Yemek Listesi </li>
              <li>Doktorlarımız </li>
              <li>Tanı ve Tedavi Üniteleri </li>
              <li>Destek Birimleri </li>
              <li> Hemşirelik Hizmetleri </li>
              <li>Anlaşmalı Kurumlar </li>
              <li>Diğer Hizmetler </li>
              <li>Enfeksiyon Komitesi </li>
              <li>Yanık Tedavi Merkezi</li>
              <li>Telefon Rehberi</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div className="Dokumanlar">
            <ul>
              <li>
                <h1>
                  <span>
                    {" "}
                    <i class="fa fa-sign-out"></i>
                  </span>{" "}
                  COVID-19
                </h1>
              </li>
              <li>
                <h1>
                  <span>
                    {" "}
                    <i class="fa fa-sign-out"></i>
                  </span>{" "}
                  İhalele Duyuruları{" "}
                </h1>{" "}
              </li>
              <li>
                <h1>
                  {" "}
                  <span>
                    {" "}
                    <i class="fa fa-sign-out"></i>
                  </span>{" "}
                  Gerekli Dökümanlar
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
