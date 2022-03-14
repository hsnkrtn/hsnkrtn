import React, { useEffect } from "react";
import mesaidisi from "./Dosyalar/mesaidisi.pdf";
import GuncelSut from "./Dosyalar/GuncelSut.rar";
import SUTEskiYenikarsilastirma from "./Dosyalar/SUTEskiYenikarsilastirma.xlsx";
import TSKSAĞLIKYÖNETMELİĞİ from "./Dosyalar/T.S.K.SAĞLIKYÖNETMELİĞİ.pdf";
import EngellilikDegerlendirmesi from "./Dosyalar/Eriskinler icin Engellilik Degerlendirmesi Hakkinda Yonetmelik (2).pdf";
import icinOzelGereksinim from "./Dosyalar/Cocuklar icin Ozel Gereksinim Değerlendirmesi Hakkinda Yonetmelik (1).pdf";
import PatolojiRaporuZorunluOlanIslemler from "./Dosyalar/patoloji_raporu_zorunlu_olan_islemler (1).pdf";
import TeshisveTaniKodlari from "./Dosyalar/Teshis ve Tani Kodlari Yeni (1).pdf";
import erecete from "./Dosyalar/erecete (2).pdf";
import MaddeKodlari from "./Dosyalar/EtkinMaddeKodlari.pdf";
import FaturaInceleme from "./Dosyalar/fatura inceleme usul ve esaslari (1).pdf";
import Medula3Senaryo from "./Dosyalar/Medula3_Senaryo.pdf";
import istirahatRaporlariHkGenelge from "./Dosyalar/2016-12-sayili-istirahat-raporlari-hk-genelge.pdf";
import MEDULA_V3_24_12_2008 from "./Dosyalar/MEDULA_V3_24_12_2008.pdf";
import YÖKGirişimselİşlemPuanCetveli from "./Dosyalar/YOK Girisimsel İslem Puan Cetveli (1).rar";
import OzgurlukKriterleri from "./Dosyalar/30032013OzurlulukKriterleri (1).rar";

function GerekliDokumanlar(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <section className="RouterSayfasiDetay">
          <ul  className="GereklıDokumanlarLıstesı" >
          <h1>Gerekli Dökümanlar </h1>

            <a href={mesaidisi} target="_blank">
              <li>
                Mesai Saatleri Dışında Bizzat Verilen Sağlık Hizmetlerinde
                Ücretlendirme, Usul ve Esasları{" "}
              </li>
            </a>
            <a href={GuncelSut} target="_blank">
              <li>2021 Güncel Sut</li>
            </a>
            <a href={SUTEskiYenikarsilastirma} target="_blank">
              <li>Sut Eski - Yeni Karşılaştırma</li>
            </a>
            <a href={TSKSAĞLIKYÖNETMELİĞİ} target="_blank">
              <li>Türk Silahlı Kuvvetleri Sağlık Yeteneği Yönetmeliği</li>
            </a>
            <a href={EngellilikDegerlendirmesi} target="_blank">
              <li>
                Erişkinler için Engellilik Değerlendirmesi Hakkında Yönetmelik
              </li>
            </a>
            <a href={icinOzelGereksinim} target="_blank">
              <li>
                Çocuklar için Özel Gereksinim Değerlendirmesi Hakkında
                Yönetmelik
              </li>
            </a>
            <a href={YÖKGirişimselİşlemPuanCetveli} target="_blank">
              <li>YÖK Girişimsel İşlem Puan Cetveli</li>
            </a>
            <a href={FaturaInceleme} target="_blank">
              <li>SGK Fatura İnceleme Usul ve Esasları</li>
            </a>
            <a href={PatolojiRaporuZorunluOlanIslemler} target="_blank">
              <li>Patoloji Raporu Zorunlu Olan İşlemler </li>
            </a>
            <a href={erecete} target="_blank">
              <li>E-REÇETE Duyuru</li>
            </a>
            <a href={OzgurlukKriterleri} target="_blank">
              <li>Yeni Özürlülük Kriterleri</li>
            </a>
            <a href={TeshisveTaniKodlari} target="_blank">
              <li>Teşhis ve Tanı Kodları</li>
            </a>
            <a href={MaddeKodlari} target="_blank">
              <li>MEDULA İlaç Raporları Etkin Madde Kodları</li>
            </a>
            <a href={Medula3Senaryo} target="_blank">
              <li>MEDULA V.3. Seneryolar</li>
            </a>
            <a href={MEDULA_V3_24_12_2008} target="_blank">
              <li>MEDULA V.3. Eğitim Dökumanı</li>
            </a>
            <a href={istirahatRaporlariHkGenelge} target="_blank">
              <li>İstirahat Raporları Hakkında Genelge</li>
            </a>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default GerekliDokumanlar;
