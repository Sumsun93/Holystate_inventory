/**
 * Global import
 */
import React from "react";

/**
 * Local import
 */
import './content.css';

import Slot from "../Slot";
import Item from "../Item";

import Keys_IMG from "../../images/Keys_IMG.png";
import id from "../../images/id-card.png";
import backpack from "../../images/backpack.png";
import Close_IMG from '../../images/Close_IMG.png';

/**
 * Component
 */
class Content extends React.Component {
  state = {
    itemDrag: null,
  }

  handleDragItem = (id) => (state) => {
    this.setState({
      itemDrag: state ? id : null,
    })
  }

  render() {
    const { itemDrag } = this.state;
    const { items } = this.props;

    const array = new Array(35).fill("");

    return (
      <div id="right_content">
        <div className="content_header">
          <span>0/50Kg</span>
          <h1>Inventar</h1>
          <div id="actions">
            <button className="icon_action">
              <img src={backpack} alt="backpack" />
            </button>
            <button className="icon_action">
              <img src={Keys_IMG} alt="Keys" />
            </button>
            <button className="icon_action">
              <img src={id} alt="id" />
            </button>
            <button className="icon_action">
              <img src={Close_IMG} alt="Close" />
            </button>
          </div>
        </div>
        <div id="content_items">
          {array.map((a, index) => (
            <Slot key={index} id={index} context="content" onChange={this.props.onChange}>
              {items.find(item => item.slot === index) && (
                <Item
                  id={index}
                  data={items.find(item => item.slot === index)}
                  onDrag={this.handleDragItem(items.find(item => item.slot === index).id)}
                  isDrag={itemDrag === items.find(item => item.slot === index).id}
                  context="content"
                />
              )}
            </Slot>
          ))}
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default Content;
