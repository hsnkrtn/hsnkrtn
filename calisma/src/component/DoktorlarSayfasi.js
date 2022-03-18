import React, { Component } from "react";
import DataConsumer from "../context";
import { Link } from "react-router-dom";

export class DoktorlarSayfasi extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  static contextType = DataConsumer;
  constructor(props) {
    super(props);
    this.state = {
      ButunDoktorlar: [],
      CerrahiListesi: [],
      DahiliListesi: [],
      DigerTedaviListesi: [],
      TemelListesi: [],
    };
  }
  render() {
    return (
      <DataConsumer>
        {(value) => {
          this.state.ButunDoktorlar = value.Bolumler;
          this.state.CerrahiListesi = value.Bolumler[0].CerrahiTipBilimleri;
          this.state.DahiliListesi = value.Bolumler[0].DahiliTıpBilimleri;
          this.state.TemelListesi = value.Bolumler[0].TemelTipBilimleri;
          this.state.DigerTedaviListesi =
            value.Bolumler[0].DigerTedaviUniteleri;
          return (
            <div className="RouterSayfasi">
              <div className="RouterSayfasiIcerik">
                <div className="RouterSayfasiDetay">
                  <div className="DoktorlarSayfasi">
                    <h1> DAHİLİ TIP BİLİMLERİ </h1>
                    <ul>
                      {this.state.DahiliListesi.map((DahiliListesi, index) => {
                        return (
                          <Link
                            to={{
                              pathname: `/Doktorlar/${DahiliListesi.id} `,
                              state: {
                                Gonderilenveriler:
                                  this.state.DahiliListesi[index],
                              },
                            }}
                          >
                            <li>
                              &nbsp;
                              <span>
                                <i className="fa fa-chevron-right"></i>
                              </span>
                              &nbsp;
                              {DahiliListesi.BolumAdi}
                            </li>
                          </Link>
                        );
                      })}{" "}
                    </ul>

                    <h1> CERRAHİ TIP BİLİMLERİ</h1>

                    <ul>
                      {this.state.CerrahiListesi.map(
                        (CerrahiListesi, index) => {
                          return (
                            <Link
                              to={{
                                pathname: `/Doktorlar/${CerrahiListesi.id} `,
                                state: {
                                  Gonderilenveriler:
                                    this.state.CerrahiListesi[index],
                                },
                              }}
                            >
                              <li>
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
                    </ul>
                    <h1> TEMEL TIP BİLİMLERİ</h1>

                    <ul>
                      {this.state.TemelListesi.map((TemelListesi, index) => {
                        return (
                          <Link
                            to={{
                              pathname: `/Doktorlar/${TemelListesi.id} `,
                              state: {
                                Gonderilenveriler:
                                  this.state.TemelListesi[index],
                              },
                            }}
                          >
                            <li>
                              &nbsp;
                              <span>
                                <i className="fa fa-chevron-right"></i>
                              </span>
                              &nbsp;
                              {TemelListesi.BolumAdi}
                            </li>
                          </Link>
                        );
                      })}{" "}
                    </ul>
                    <h1> DİĞER TEDAVİ ÜNİTELERİ</h1>

                    <ul>
                      {this.state.DigerTedaviListesi.map(
                        (DigerTedaviListesi, index) => {
                          return (
                            <Link
                              to={{
                                pathname: `/Doktorlar/${DigerTedaviListesi.id} `,
                                state: {
                                  Gonderilenveriler:
                                    this.state.DigerTedaviListesi[index],
                                },
                              }}
                            >
                              <li>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </DataConsumer>
    );
  }
}

export default DoktorlarSayfasi;
