/**
 * Global import
 */
import React from "react";

/**
 * Local import
 */
// import bg_stripes from "../../images/bg_stripes.png";
import Item_IMG from "../../images/Item_IMG.png";

import Drag from './Drag';

/**
 * Component
 */
class Item extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Drag {...this.props}>
        <div className="item">
          {/* <img className="bg_stripes" src={bg_stripes} /> */}
          <img className="Item_IMG" src={Item_IMG} alt="item" />
          <div className="Item_Text">{data.name}</div>
          <div className="Item_Quantity">{data.quantity}x</div>
        </div>
      </Drag>
    );
  }
}

/**
 * Export
 */
export default Item;