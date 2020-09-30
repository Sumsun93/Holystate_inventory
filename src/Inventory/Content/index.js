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
          <div></div>
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
