/**
 * Global import
 */
import React from "react";
import { ContextMenuTrigger, ContextMenu, MenuItem } from "react-contextmenu";

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
  handleAction = (type) => () => {
    console.log(`DO ACTION ${type}`)
  }

  render() {
    const { data } = this.props;
    return (
      <Drag {...this.props}>
        <ContextMenuTrigger id={data.id.toString()}>
          <div className="item">
            {/* <img className="bg_stripes" src={bg_stripes} /> */}
            <img className="Item_IMG" src={Item_IMG} alt="item" />
            <div className="Item_Text">{data.name}</div>
            <div className="Item_Quantity">{data.quantity}x</div>
          </div>
          <ContextMenu id={data.id.toString()} className="context_menu">
            <MenuItem onClick={this.handleAction(1)} className="context_item">Action 1</MenuItem>
            <MenuItem onClick={this.handleAction(2)} className="context_item">Action 2</MenuItem>
            <MenuItem onClick={this.handleAction(3)} className="context_item">Action 3</MenuItem>
            <MenuItem onClick={this.handleAction(4)} className="context_item">Action 4</MenuItem>
          </ContextMenu>
        </ContextMenuTrigger>
      </Drag>
    );
  }
}

/**
 * Export
 */
export default Item;