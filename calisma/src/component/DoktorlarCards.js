import React from "react";

function DoktorlarCards(props) {
  return (
    <div className="DoktorlarCards">
      <div className="DoktorlarCardsFotograf">
        <img src={props.Fotograf}></img>
      </div>

      <div className="DoktorlarCardsDetay">
        <h4>{props.Adi}</h4>
        <hr></hr>
        <p1>{props.unvan} </p1>
      </div>
    </div>
  );
}

export default DoktorlarCards;
