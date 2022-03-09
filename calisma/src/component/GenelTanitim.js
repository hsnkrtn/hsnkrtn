import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

function GenelTanitim(props) {

  const location = useLocation();
  const Baslik = location.state.Baslik;
  const Detay = location.state.Detay;
  const Fotograf =location.state.Fotograf;
  console.log(Fotograf)
  useEffect(() => {
    window.scrollTo(0, 0);
  });
console.log(Detay)
  return (
    <div className="RouterSayfasi">
      <div className="RouterSayfasiIcerik">
        <img className="RouterSayfasiFotograf" src={Fotograf}></img>
        <section  className="RouterSayfasiDetay" > 
          <h1> {Baslik}</h1>
          <hr></hr>
          <p1> {Detay}</p1>
        </section>
        
      </div>
    </div>
  );
}

export default GenelTanitim;
