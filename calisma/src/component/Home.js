import React, { Component } from "react";
import "../App.css";
import Carousel from "./Carousel"
import Cards from "./Cards"
import Haberler from "./Haberler"
import Duyurular from "./Duyurular"

class Home extends Component {
componentDidMount(){
  window.scrollTo(0, 0);
}


  render() {
    return (
      <div className="Home" >
        <Carousel />
        <Cards />
        <Haberler />
        <Duyurular />
      </div>
    );
  }
}
export default Home;
