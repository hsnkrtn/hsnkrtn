import React, { Component } from "react";
import DataConsumer from "../context.js";
import { Link } from "react-router-dom";

class HaberSlider extends Component {
  static contextType = DataConsumer;
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 320;
  };

  slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 320;
  };

  componentDidMount() {
    const slider = document.querySelector(".HaberlerVeEtkinlikler");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 5; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }
  render() {
    return (
      <DataConsumer>
        {(value) => {
          let GosterilecekHaberlerson = value.Haberler;
          return (
            <div>
    <div className="Slider-container">
                <div className="HLeftButton" onClick={this.slideRight}>
                  <i className="fa fa-angle-left"></i>
                </div>


             
         

              <ul className="HaberlerVeEtkinlikler" id="slider">
                {GosterilecekHaberlerson.map(
                  (GosterilecekHaberlerson, index) => {
                    return (
                      <Link
                        to={{
                          pathname: `/HaberSayfası/${GosterilecekHaberlerson.HaberId} `,
                          state: {
                            Baslik: GosterilecekHaberlerson.HaberBasligi,
                           Detay: GosterilecekHaberlerson.HaberDetayi,
                            Fotograf:  GosterilecekHaberlerson.Fotograf,
                      

                          },
                        }}
                      >
                        <li
                          class="Haber"
                          key={index}
                          id={GosterilecekHaberlerson.HaberId}
                        >
                          <div>
                            <img
                              class="Hfotograf"
                              src={GosterilecekHaberlerson.Fotograf[0]}
                            />
                          </div>
                          <div class="Haberbody">
                            <h4>{GosterilecekHaberlerson.HaberBasligi}</h4>
                            <p>{GosterilecekHaberlerson.HaberDetayi}</p>
                          </div>
                        </li>
                      </Link>
                    );
                  }
                )}
              </ul>
              <div className="HRightButton" onClick={this.slideLeft}>
                  <i className="fa fa-angle-right"></i>
                </div>

              </div>

            </div>
          );
        }}
      </DataConsumer>
    );
  }
}
export default HaberSlider;
