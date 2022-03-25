import React, { Component } from "react";
import "./App.css";
import NavigasyonBar from "./component/NavigasyonBar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import GenelTanitim from "./component/GenelTanitim";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Yonetim from "./component/Yonetim"; 
import Bolumler from "./component/Bolumler"; 
import Doktorlar from "./component/Doktorlar"; 
import HaberSayfası from "./component/HaberSayfası"; 
import DuyuruSayfası from "./component/DuyuruSayfası"; 
import GerekliDokumanlar from "./component/GerekliDokumanlar"; 
import Covid19 from "./component/Covid19"; 
import DoktorlarSayfasi from "./component/DoktorlarSayfasi"; 
import BolumlerSayfasi from "./component/BolumlerSayfasi"; 
import EnfeksiyonKomitesi from "./component/EnfeksiyonKomitesi"; 
import ResimlerVeVideolar from "./component/ResimlerVeVideolar"; 
import Iletisim from "./component/Iletisim"; 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigasyonBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/GenelTanitim/:Id">
              <GenelTanitim />
            </Route>
            <Route path="/ResimlerVeVideolar/:Id">
              <ResimlerVeVideolar />
            </Route>
            <Route path="/Yonetim/:Id">
              <Yonetim/>
            </Route>
            <Route path="/Bolumler/:Id">
              <Bolumler/>
            </Route>
            <Route path="/Doktorlar/:Id">
              <Doktorlar/>
            </Route>
            <Route path="/HaberSayfası/:Id">
              <HaberSayfası/>
            </Route>
            <Route path="/DuyuruSayfası/:Id">
              <DuyuruSayfası/>
            </Route>
            <Route path="/GerekliDokumanlar">
              <GerekliDokumanlar/>
            </Route>
            <Route path="/Covid19">
              <Covid19/>
            </Route>
            <Route path="/DoktorlarSayfasi">
              <DoktorlarSayfasi/>
            </Route>
            <Route path="/BolumlerSayfasi">
              <BolumlerSayfasi/>
            </Route>
            <Route path="/EnfeksiyonKomitesi">
              <EnfeksiyonKomitesi/>
            </Route>
            <Route path="/Iletisim">
              <Iletisim/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
