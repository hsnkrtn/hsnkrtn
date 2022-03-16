import React, { Component } from "react";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData.js";
import EimzPdf from "../component/Dosyalar/Eimza.pdf";
import EödenekPdf from "../component/Dosyalar/Eödenek.pdf";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const Logo = HastaneFotograflari[0].Logo;
    return (
      <div className="Footer">
        <div className="footerInner">
          <div className="footerlogodetails">
            <img className="footerlogo" src={Logo}></img>
            <p1>
              <a href="mailto: hastane@firat.edu.tr?subject = Feedback&body = Message">
                <span>
                  <i class="fa fa-envelope"></i>{" "}
                </span>{" "}
                hastane@firat.edu.tr
              </a>
            </p1>

            <br></br>
            <p1>
              <a href="tel: 04242333555">
                <span>
                  <i class="fa fa-phone"></i>{" "}
                </span>{" "}
                &nbsp; 0424 233 35 55
              </a>
            </p1>
            <br></br>
            <p1>
              <a
                href="http://maps.google.com/?q=1200 Fırat Üniversitesi Hastanesi, Üniversite, 23200 Merkez/Elazığ"
                target="_blank"
              >
                <span>
                  <i class="fa fa-map"></i>
                </span>
                &nbsp; Üniversite Mahallesi Yahya Kemal Caddesi No:25
                MERKEZ/ELAZIĞ
              </a>
            </p1>
            <br></br>
            <p1 className="SocialMedia">
              <a
                href="https://www.instagram.com/fuhastanesiresmihesap/"
                target="_blank"
              >
                {" "}
                <span>
                  <i className="fa fa-instagram"></i>{" "}
                </span>{" "}
                &nbsp; fuhastanesiresmihesap
              </a>
            </p1>
          </div>
          <div className="OnemliLinkler">
            <ul className="OnemliLinklerListesi">
              <h1>Önemli Linkler </h1>
              <a href="http://www.firat.edu.tr/tr" target="_blank">
                <li>Fırat Üniversitesi </li>
              </a>
              <a href="http://tip.firat.edu.tr/tr" target="_blank">
                {" "}
                <li>Tıp Fakültesi </li>
              </a>

              <a href="https://www.ilacrehberi.com/" target="_blank">
                {" "}
                <li>İlaç Rehberi </li>{" "}
              </a>
              <a
                href="https://hsgm.saglik.gov.tr/tr/beslenmehareket-anasayfa"
                target="_blank"
              >
                {" "}
                <li>Beslenme Hizmetleri </li>
              </a>
              <a href="https://obs.saglik.gov.tr/Account/Login" target="_blank">
                {" "}
                <li>Ölüm Bildirim Sistemi </li>{" "}
              </a>

              <li> KPY Sistemi Eğitim Videosu </li>
              <a href={EimzPdf} target="_blank  ">
                <li>E-Reçete E-İmza İşlemleri </li>{" "}
              </a>
              <a href="https://ebys.firat.edu.tr/cas/" target="_blank">
                {" "}
                <li>EBYS </li>{" "}
              </a>
              <a href="http://donersermy.firat.edu.tr/" target="_blank">
                {" "}
                <li>Döner Sermaye İşletme M.</li>{" "}
              </a>
              <a
                href="https://ckysweb.saglik.gov.tr/labtestlerapp/testlabara.aspx"
                target="_blank"
              >
                <li>Bu Test Nerede Yapılır?</li>{" "}
              </a>
              <a href={EödenekPdf} target="_blank">
                {" "}
                <li> Yeni İş Göremezlik Rapor Uygulaması</li>{" "}
              </a>
            </ul>
          </div>
          <div className="Hizmetlerimiz">
            <ul className="HizmetlerimizListesi">
              <h1> Hizmetlerimiz</h1>
              <li>Hastalarımız İçin </li>
              <a href="http://10.8.12.140/lc/default.asp?hid=1" target="_blank">
                {" "}
                <li>Yemek Listesi </li>{" "}
              </a>

              <li>Doktorlarımız </li>
              <li>Tanı ve Tedavi Üniteleri </li>
              <li>Destek Birimleri </li>
              <li> Hemşirelik Hizmetleri </li>
              <li>Anlaşmalı Kurumlar </li>
              <li>Diğer Hizmetler </li>
              <li>Enfeksiyon Komitesi </li>
              <li>Yanık Tedavi Merkezi</li>
              <a
                href="http://10.8.12.140/telefonsonuc.asp?aranan=all"
                target="_blank"
              >
                {" "}
                <li>Telefon Rehberi</li>{" "}
              </a>

              <li>İletişim</li>
            </ul>
          </div>
          <div className="Dokumanlar">
            <ul>
              <li>
                <Link to="/Covid19">
                  <h1>
                    {" "}
                    <span>
                      {" "}
                      <i class="fa fa-sign-out"></i>
                    </span>{" "}
                    COVID-19
                  </h1>
                </Link>
              </li>
              <a
                href="http://donersermy.firat.edu.tr/satinalma.aspx"
                target="_blank"
              >
                <li>
                  <h1>
                    <span>
                      {" "}
                      <i class="fa fa-sign-out"></i>
                    </span>{" "}
                    İhale Duyuruları{" "}
                  </h1>
                </li>
              </a>
              <li>
                <Link to="/GerekliDokumanlar">
                  <h1>
                    {" "}
                    <span>
                      {" "}
                      <i class="fa fa-sign-out"></i>
                    </span>{" "}
                    Gerekli Dökümanlar
                  </h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
