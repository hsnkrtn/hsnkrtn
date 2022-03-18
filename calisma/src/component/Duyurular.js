import React, { Component } from "react";
import { bga } from "./Helpers/AttachmentData";
import DataConsumer from "../context";
import { Link } from "react-router-dom";
import { HastaneFotograflari } from "./Helpers/HastaneResimlerData";

import "../App.css";

class Duyurular extends Component {
  static contextType = DataConsumer;
  constructor(props) {
    super(props);
    this.state = {
      bgaNumber: 0,
      UpbottonShow: false,
      DownbottonShow: true,
      ScrollValue: 0,
      ScrollMoveValue: 400,
      GosterilecekDuyurular: [],
      Baslik: "",
      Detay: "",
      Fotograf: "",
    };
  }
  componentDidMount() {
    let WindowWidth = window.innerWidth;
    if (WindowWidth < 700) {
      this.setState({
        ScrollMoveValue: 345,
      });
    } else {
      this.setState({
        ScrollMoveValue: 400,
      });
    }
  }

  slideDown = () => {
    var slider = document.getElementById("DuyuruSlider");
    this.state.ScrollValue = slider.scrollTop;
    slider.scrollTop = this.state.ScrollValue + this.state.ScrollMoveValue;

    switch (this.state.ScrollValue) {
      case 0:
        this.setState({
          UpbottonShow: true,
          DownbottonShow: true,
        });
    }
  };
  slideUp = () => {
    var slider = document.getElementById("DuyuruSlider");
    this.state.ScrollValue = slider.scrollTop;
    slider.scrollTop = this.state.ScrollValue - this.state.ScrollMoveValue;
    if (this.state.ScrollValue <= 400) {
      this.setState({
        UpbottonShow: false,
      });
    }
  };

  render() {
    return (
      <DataConsumer>
        {(value) => {
          this.state.GosterilecekDuyurular = value.Duyurular;

          return (
            <div
              className=" bga "
              style={{ backgroundImage: `url(${bga[this.state.bgaNumber].a})` }}
            >
              <a className=" DuyuruBuyukBaslik"> Duyurular </a>

              <div className="Duyuruslider">
                <ul className="duyurular" id="DuyuruSlider">
                  {this.state.GosterilecekDuyurular.map(
                    (GosterilecekDuyurular, index) => {
                      return (
                        <Link
                          onMouseEnter={() => {
                            this.setState({
                              Baslik:
                                this.state.GosterilecekDuyurular[index].Baslik,
                              Detay:
                                this.state.GosterilecekDuyurular[index].Detay,
                              Fotograf:
                                this.state.GosterilecekDuyurular[index]
                                  .Fotograf,
                            });
                          }}
                          to={{
                            pathname: `/DuyuruSayfası/Duyurular/${GosterilecekDuyurular.id} `,
                            state: {
                              Baslik: this.state.Baslik,
                              Detay: this.state.Detay,
                              Fotograf: this.state.Fotograf,
                            },
                          }}
                        >
                          <li
                            className="Duyuru"
                            key={index}
                            id={GosterilecekDuyurular.DuyuruId}
                          >
                            <div className="DuyuruIcerik">
                              {" "}
                              <section className="DuyuruTarihi">
                                <div class="date">
                                  <span class="binds"></span>
                                  <span class="month">agustos</span>
                                  <h2 class="day">28</h2>
                                  
                                  <h3 class="Year">2022</h3>
                                </div>
                              </section>
                              <div className="DuyuruBaslik">
                                {" "}
                                <h1>{GosterilecekDuyurular.Baslik}</h1>{" "}
                              </div>
                            </div>
                          </li>
                        </Link>
                      );
                    }
                  )}
                </ul>
              </div>
              <div
                className={
                  this.state.DownbottonShow ? "DuyuruDown" : "DuyuruDownHidden"
                }
                onClick={this.slideDown}
              >
                <i class="fa fa-angle-down"></i>
              </div>
              <div
                className={
                  this.state.UpbottonShow ? "DuyuruUp" : "DuyuruUpHidden"
                }
                onClick={this.slideUp}
              >
                <i class="fa fa-angle-up"></i>
              </div>
            </div>
          );
        }}
      </DataConsumer>
    );
  }
}

export default Duyurular;
