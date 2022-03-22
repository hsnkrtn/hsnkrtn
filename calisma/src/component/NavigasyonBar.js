import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataConsumer from "../context";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

class Navigasyonbar extends Component {
  static contextType = DataConsumer;
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      showLinks: false,
      showTanitimList: false,
      showKurumsalList: false,
      showYonetimList: false,
      showBolumlerList: false,
      showDahiliList: false,
      showCerrahiList: false,
      showTemelList: false,
      showDigerTedavilist: false,
      showDoktorlarList: false,
      showIletisimItems: false,
      BashekimKey: false,
      TanıtımListesi: false,
      TanıtımListesi: [],
      KurumsalListesi: [],
      YonetimListesi: [],
      BolumlerListesi: [],
      DahiliListesi: [],
      CerrahiListesi: [],
      TemelListesi: [],
      DigerTedaviListesi: [],

      BilgiIslemKoordinatorlugu: [],
      Hemsirelik: [],
      Mudurler: [],
  
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbar);
    window.scrollTo(0, 0);
  }

  changeNavbar = () => {
    if (window.scrollY > 100) {
      this.setState({ showNavbar: false });
    } else if (window.scrollY < 100) {
      this.setState({ showNavbar: true });
    }
  };

  render() {
    const logo = HastaneFotograflari[0].Logo;
    return (
      <DataConsumer>
        {(value) => {
          this.state.TanıtımListesi = value.Tanitim;
          this.state.KurumsalListesi = value.Kurumsal;
          this.state.Mudurler = value.Mudurler;
          this.state.Hemsirelik = value.Hemsirelik;
          this.state.BilgiIslemKoordinatorlugu =
            value.BilgiIslemKoordinatorlugu;

          this.state.BolumlerListesi = value.Bolumler;

          this.state.BashekimlikKisiListesi = value.BashekimlikKisiler;
          this.state.YonetimListesi = value.Yonetim;
          this.state.DahiliListesi = value.Bolumler[0].DahiliTıpBilimleri;
          this.state.CerrahiListesi = value.Bolumler[0].CerrahiTipBilimleri;
          this.state.TemelListesi = value.Bolumler[0].TemelTipBilimleri;
          this.state.DigerTedaviListesi =
            value.Bolumler[0].DigerTedaviUniteleri;

          return (
            <nav className="NavigasyonBar">
              <div></div>
              <Link className="logolink" to={`/`}>
                <img
                  className="brand"
                  title="Hastane Logo "
                  src={logo}
                  alt="Hastane Logo "
                ></img>
              </Link>{" "}
              <div
                className="Links"
                id={this.state.showLinks ? "hidden" : ""}
                onMouseLeave={() => {
                  this.setState({ showLinks: false });
                }}
              >
                <ul className="LinksList">
                  <div
                    className="NavigasyonBarItemsStyle"
                    onMouseLeave={() => {
                      this.setState({ showTanitimList: false });
                    }}
                  >
                    <li
                      className="LinksListItem"
                      onMouseEnter={() => {
                        this.setState({ showTanitimList: true });
                      }}
                    >
                      Tanıtım
                    </li>

                    <div
                      className={
                        this.state.showTanitimList ? "Listeler" : "ListeyiGizle"
                      }
                    >
                      <ul>
                        {this.state.TanıtımListesi.map(
                          (TanıtımListesi, index) => {
                            return (
                              <Link
                  
                                onMouseLeave={() => {
                                  this.setState({
                                    ResimlerVeVideolarKey: false,
                                  });
                                }}
                                to={{
                                  pathname: `/GenelTanitim/Tanitim/${TanıtımListesi.id} `,
                                  state: {
                                    Gonderilenveriler:
                                    this.state.TanıtımListesi[index],
                                  },
                                }}
                              >
                                <li className="ListelerButonlari"  >
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {TanıtımListesi.Baslik}
                                </li>
                              </Link>
                            );
                          }
                        )}
                      </ul>

                      <button
                        className="GeriButton"
                        onMouseEnter={() =>
                          this.setState({ showTanitimList: false })
                        }
                      >
                        <span>
                          <i className="fa fa-reply"></i>
                        </span>{" "}
                        &nbsp; Geri
                      </button>
                    </div>
                  </div>

                  <div
                    className="NavigasyonBarItemsStyle"
                    onMouseLeave={() => {
                      this.setState({ showKurumsalList: false });
                    }}
                  >
                    <li
                      className="LinksListItem"
                      onMouseEnter={() => {
                        this.setState({ showKurumsalList: true });
                      }}
                    >
                      Kurumsal
                    </li>

                    <div
                      className={
                        this.state.showKurumsalList
                          ? "Listeler"
                          : "ListeyiGizle"
                      }
                    >
                      <ul>
                        {this.state.KurumsalListesi.map(
                          (KurumsalListesi, index) => {
                            return (
                              <Link
                                to={{
                                  pathname: `/GenelTanitim/Kurumsal/${KurumsalListesi.id} `,
                                  state: {
                                    Gonderilenveriler:
                                      this.state.KurumsalListesi[index],
                                  },
                                }}
                              >
                                <li className="ListelerButonlari" >
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {KurumsalListesi.Baslik}
                                </li>
                              </Link>
                            );
                          }
                        )}
                      </ul>

                      <button
                        className="GeriButton"
                        onMouseEnter={() =>
                          this.setState({ showKurumsalList: false })
                        }
                      >
                        <span>
                          <i className="fa fa-reply"></i>
                        </span>{" "}
                        &nbsp; Geri
                      </button>
                    </div>
                  </div>

                  <div
                    className="NavigasyonBarItemsStyle"
                    onMouseLeave={() => {
                      this.setState({ showYonetimList: false });
                    }}
                  >
                    <li
                      className="LinksListItem"
                      onMouseEnter={() => {
                        this.setState({ showYonetimList: true });
                      }}
                    >
                      Yönetim
                    </li>

                    <div
                      className={
                        this.state.showYonetimList ? "Listeler" : "ListeyiGizle"
                      }
                    >
                      <ul>
                        {this.state.YonetimListesi.map(
                          (YonetimListesi, index) => {
                            return (
                              <Link
                                onMouseEnter={() => {
                                  if (index === 0) {
                                    this.setState({
                                      BashekimKey: true,
                                    });
                                  }
                                }}
                                onMouseLeave={() => {
                                  this.setState({
                                    BashekimKey: false,
                                  });
                                }}
                                to={{
                                  pathname: `/Yonetim/${YonetimListesi.id} `,
                                  state: {
                                    Gonderilenveriler:
                                      this.state.YonetimListesi[index],
                                    BashekimKey: this.state.BashekimKey,
                                    id: this.state.YonetimListesi.id,
                                  },
                                }}
                              >
                                <li className="ListelerButonlari" >
                                  &nbsp;
                                  <span>
                                    <i className="fa fa-chevron-right"></i>
                                  </span>
                                  &nbsp;
                                  {YonetimListesi.Baslik}
                                </li>
                              </Link>
                            );
                          }
                        )}
                      </ul>

                      <button
                        className="GeriButton"
                        onMouseEnter={() =>
                          this.setState({ showYonetimList: false })
                        }
                      >
                        <span>
                          <i className="fa fa-reply"></i>
                        </span>{" "}
                        &nbsp; Geri
                      </button>
                    </div>
                  </div>

                  <div
                    className="NavigasyonBarItemsStyle"
                    onMouseLeave={() => {
                      this.setState({ showBolumlerList: false });
                    }}
                  >
                    <li
                      className="LinksListItem"
                      onMouseEnter={() => {
                        this.setState({ showBolumlerList: true });
                      }}
                    >
                      Bölümler
                    </li>

                    <div
                      className={
                        this.state.showBolumlerList
                          ? "Listeler"
                          : "ListeyiGizle"
                      }
                    >
                      <div className="Bolumler">
                        <div>
                          <h1
                            className="DahiliButton"
                            onMouseEnter={() =>
                              this.setState({ showDahiliList: true })
                            }
                          >
                            DAHİLİ TIP BİLİMLERİ{" "}
                          </h1>
                          <ul
                            className={
                              this.state.showBolumlerList
                                ? "DahiliListesi"
                                : "ListeyiGizle"
                            }
                            id={
                              this.state.showDahiliList
                                ? "Bolumlistelerinigoster"
                                : null
                            }
                          >
                            {this.state.DahiliListesi.map(
                              (DahiliListesi, index) => {
                                return (
                                  <Link
                                    to={{
                                      pathname: `/Bolumler/${DahiliListesi.id} `,
                                      state: {
                                        Baslik: this.state.Baslik,
                                        Gonderilenveriler:
                                          this.state.DahiliListesi[index],
                                      },
                                    }}
                                  >
                                    <li className="ListelerButonlari" >
                                      &nbsp;
                                      <span>
                                        <i className="fa fa-chevron-right"></i>
                                      </span>
                                      &nbsp;
                                      {DahiliListesi.BolumAdi}
                                    </li>
                                  </Link>
                                );
                              }
                            )}{" "}
                            <button
                              className="GeriButton"
                              onMouseEnter={() =>
                                this.setState({ showDahiliList: false })
                              }
                            >
                              <span>
                                <i className="fa fa-reply"></i>
                              </span>{" "}
                              &nbsp; Geri
                            </button>
                          </ul>
                        </div>

                        <div>
                          {" "}
                          <h1
                            className="CerrahiButton"
                            onMouseEnter={() =>
                              this.setState({ showCerrahiList: true })
                            }
                          >
                            CERRAHİ TIP BİLİMLERİ
                          </h1>
                          <ul
                            className={
                              this.state.showBolumlerList
                                ? "CerrahiListesi"
                                : "ListeyiGizle"
                            }
                            id={
                              this.state.showCerrahiList
                                ? "Bolumlistelerinigoster"
                                : null
                            }
                          >
                            {this.state.CerrahiListesi.map(
                              (CerrahiListesi, index) => {
                                return (
                                  <Link
                                    to={{
                                      pathname: `/Bolumler/${CerrahiListesi.id} `,
                                      state: {
                                        Baslik: this.state.Baslik,
                                        Gonderilenveriler:
                                          this.state.CerrahiListesi[index],
                                      },
                                    }}
                                  >
                                    <li className="ListelerButonlari" >
                                      &nbsp;
                                      <span>
                                        <i className="fa fa-chevron-right"></i>
                                      </span>
                                      &nbsp;
                                      {CerrahiListesi.BolumAdi}
                                    </li>
                                  </Link>
                                );
                              }
                            )}{" "}
                            <button
                              className="GeriButton"
                              onMouseEnter={() =>
                                this.setState({ showCerrahiList: false })
                              }
                            >
                              <span>
                                <i className="fa fa-reply"></i>
                              </span>{" "}
                              &nbsp; Geri
                            </button>
                          </ul>
                        </div>

                        <div>
                          {" "}
                          <h1
                            className="TemelButton"
                            onMouseEnter={() =>
                              this.setState({ showTemelList: true })
                            }
                          >
                            {" "}
                            TEMEL TIP BİLİMLERİ{" "}
                          </h1>
                          <ul
                            className={
                              this.state.showBolumlerList
                                ? "TemelListesi"
                                : "ListeyiGizle"
                            }
                            id={
                              this.state.showTemelList
                                ? "Bolumlistelerinigoster"
                                : null
                            }
                          >
                            {this.state.TemelListesi.map(
                              (TemelListesi, index) => {
                                return (
                                  <Link
                                    to={{
                                      pathname: `/Bolumler/${TemelListesi.id} `,
                                      state: {
                                        Baslik: this.state.Baslik,
                                        Gonderilenveriler:
                                          this.state.TemelListesi[index],
                                      },
                                    }}
                                  >
                                    <li className="ListelerButonlari" >
                                      &nbsp;
                                      <span>
                                        <i className="fa fa-chevron-right"></i>
                                      </span>
                                      &nbsp;
                                      {TemelListesi.BolumAdi}
                                    </li>
                                  </Link>
                                );
                              }
                            )}
                            <button
                              className="GeriButton"
                              onMouseEnter={() =>
                                this.setState({ showTemelList: false })
                              }
                            >
                              <span>
                                <i className="fa fa-reply"></i>
                              </span>{" "}
                              &nbsp; Geri
                            </button>
                          </ul>
                        </div>

                        <div>
                          <h1
                            className="DigerButton"
                            onMouseEnter={() =>
                              this.setState({ showDigerTedavilist: true })
                            }
                          >
                            {" "}
                            DİĞER TEDAVİ ÜNİTELERİ{" "}
                          </h1>
                          <ul
                            className={
                              this.state.showBolumlerList
                                ? "DigerTedaviListesi"
                                : "ListeyiGizle"
                            }
                            id={
                              this.state.showDigerTedavilist
                                ? "Bolumlistelerinigoster"
                                : null
                            }
                          >
                            {this.state.DigerTedaviListesi.map(
                              (DigerTedaviListesi, index) => {
                                return (
                                  <Link
                                    to={{
                                      pathname: `/Bolumler/${DigerTedaviListesi.id} `,
                                      state: {
                                        Baslik: this.state.Baslik,
                                        Gonderilenveriler:
                                          this.state.DigerTedaviListesi[index],
                                      },
                                    }}
                                  >
                                    <li  className="ListelerButonlari" >
                                      &nbsp;
                                      <span>
                                        <i className="fa fa-chevron-right"></i>
                                      </span>
                                      &nbsp;
                                      {DigerTedaviListesi.BolumAdi}
                                    </li>
                                  </Link>
                                );
                              }
                            )}{" "}
                            <button
                              className="GeriButton"
                              onMouseEnter={() =>
                                this.setState({ showDigerTedavilist: false })
                              }
                            >
                              <span>
                                <i className="fa fa-reply"></i>
                              </span>{" "}
                              &nbsp; Geri
                            </button>
                          </ul>
                        </div>
                      </div>
                      <button
                        className="GeriButtonBolumler"
                        onMouseEnter={() =>
                          this.setState({ showBolumlerList: false })
                        }
                      >
                        <span>
                          <i className="fa fa-reply"></i>
                        </span>{" "}
                        &nbsp; Geri
                      </button>
                    </div>
                  </div>

                  <div
                    className="NavigasyonBarItemsStyle"
                    onMouseLeave={() => {
                      this.setState({ showDoktorlarList: false });
                    }}
                  >
                    {" "}
                    <Link to="/DoktorlarSayfasi">
                      {" "}
                      <li className="LinksListItem">Doktorlar </li>
                    </Link>
                    <div
                      className={
                        this.state.showDoktorlarList
                          ? "Listeler"
                          : "ListeyiGizle"
                      }
                    ></div>
                  </div>

                  <div
                    className="NavigasyonBarItemsStyle"
                    onMouseLeave={() => {
                      this.setState({ showIletisimItems: false });
                    }}
                  >
                    <Link to="/Iletisim">
                      <li
                        className="LinksListItem"
                        onMouseEnter={() => {
                          this.setState({ showIletisimItems: true });
                        }}
                      >
                        İletişim
                      </li>
                    </Link>
                    <div
                      className={
                        this.state.showIletisimItems
                          ? "IletisimItemsIframe"
                          : "ListeyiGizle"
                      }
                    >
                      <iframe
                        title="GoogleHarita"
                        className="harita"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.6093589334732!2d39.20330651580714!3d38.68084487960478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c0895a19c2a3%3A0x56a2b23e62945af6!2sF%C4%B1rat+%C3%9Cniversitesi+Hastanesi!5e0!3m2!1str!2str!4v1515742266104"
                      >
                        {" "}
                      </iframe>
                      <div className="HastaneIletisim">
                        <h>Adres </h> : Üniversite Mahallesi Yahya Kemal Caddesi
                        No:25 MERKEZ/ELAZIĞ <br></br>
                        <h>Telefon </h>: 0424 233 35 55<br></br>
                        <h>E-mail </h>: hastane@firat.edu.tr<br></br>
                        <h> Hesap Bilgileri:</h>
                        <br></br>
                        <h>Banka adı : </h>T.C. Ziraat Bankasi <br></br>
                        <h> Fırat Şubesi Hesap adı : </h> Fırat Üniversitesi
                        Döner Sermaye İşletme Müdürlüğü <br></br>
                        <h>İban no : </h> TR860001001561135354675057
                        <button
                          className="GeriButtonBolumler"
                          onMouseEnter={() =>
                            this.setState({ showIletisimItems: false })
                          }
                        >
                          <span>
                            <i className="fa fa-reply"></i>
                          </span>{" "}
                          &nbsp; Geri
                        </button>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="search-box">
                <button className="btn-search ">
                  <i className="fa fa-search"></i>
                </button>

                <input
                  type="text"
                  className="input-search"
                  placeholder="Arama Yap"
                ></input>
              </div>
              <Link
                to={{
                  pathname:
                    "https://ftmhbys.mergentech.com.tr/mergenTechSbsHastaPortaliIstemci/giris",
                }}
                target="_blank"
              >
                {" "}
                <button className="RandevuAlButton"> RANDEVU AL </button>{" "}
              </Link>
              <button
                className="MenüButton"
                onClick={() =>
                  this.setState({ showLinks: !this.state.showLinks })
                }
              >
                <i className="fa fa-bars "></i>
              </button>
            </nav>
          );
        }}
      </DataConsumer>
    );
  }
}

export default Navigasyonbar;
