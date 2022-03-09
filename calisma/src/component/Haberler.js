import DataConsumer from "../context";
import { Component } from "react";
import HaberSlider from "./HaberSlider";

class Haberler extends Component {
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
      const walk = (x - startX) * 2; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  render() {
 
          return (
            <div className="HVE ">
              <a className=" buyukbaslik"> Haberler & Etkinlikler </a>
<HaberSlider></HaberSlider>
          
            </div>
          );


    
  
  }
}

export default Haberler;
