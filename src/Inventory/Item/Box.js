import React from "react";

import './item.css';

// import bg_stripes from "../../images/bg_stripes.png";
import Item_IMG from "../../images/Item_IMG.png";

const Box = ({ data }) => {
  return (
    <div className="item">
      {/* <img className="bg_stripes" src={bg_stripes} /> */}
      <img className="Item_IMG" src={Item_IMG} alt="item" />
      <div className="Item_Text">{data.name}</div>
      <div className="Item_Quantity">{data.quantity}x</div>
    </div>
  );
};

export default Box;
