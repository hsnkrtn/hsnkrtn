import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

function GenelTanitim(props) {
  const location = useLocation();
  const Baslik = location.state.Baslik;
  const Detay = location.state.Detay;
  const Fotograf = location.state.Fotograf;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <section className="RouterSayfasiDetay">
          <img className="RouterSayfasiFotograf" src={Fotograf}></img>{" "}
          <h1> {Baslik}</h1>
          <hr></hr>
          <p1> {Detay}</p1>
        </section>
      </div>
    </div>
  );
}

export default GenelTanitim;
