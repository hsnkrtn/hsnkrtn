import React, { Component } from "react";
import { bga } from "./Helpers/AttachmentData";
import DataConsumer from "../context";

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
      ScrollMoveValue:400,

    };

  }
  componentDidMount (){
    let WindowWidth = window.innerWidth;
if(WindowWidth<700){
  this.setState ({
    
    ScrollMoveValue:345
  })
}
else {
  this.setState ({
    
    ScrollMoveValue:400
  })
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
          let GosterilecekDuyurular = value.Duyurular;
            
          return (
            <div
              className=" bga "
              style={{ backgroundImage: `url(${bga[this.state.bgaNumber].a})` }}
            >
              <a className=" DuyuruBuyukBaslik"> Duyurular </a>


              <div className="Duyuruslider">
                <div className="duyurular" id="DuyuruSlider">
                  {GosterilecekDuyurular.map((GosterilecekDuyurular, index) => {
                    return (
                      <div
                        className="Duyuru"
                        key={index}
                        id={GosterilecekDuyurular.DuyuruId}
                      >
                        <div className="DuyuruIcon">
                          <i class="fa  fa-envelope"></i>
                        </div>

                        <div className="DuyuruIcerik">
                          <h1 className="DuyuruBaslik">
                            {GosterilecekDuyurular.DuyuruBaslik}
                          </h1>
                          <div className="Dtarih">
                            <p> {GosterilecekDuyurular.Dtarih} </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
