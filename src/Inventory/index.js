/**
 * Global import
 */
import React from "react";
import { DndProvider } from 'react-dnd';
import Backend from "react-dnd-mouse-backend";


/**
 * Local import
 */
import './inventory.css';
 
import CustomDragLayer from './Item/CustomDragLayer';
import Content from './Content';
import Clothings from './Clothings';
import Weapons from './Weapons';

/**
 * Component
 */
class MyInventory extends React.Component {
  state = {
    content: new Array(30).fill("").map((e, index) => ({ name: `KRÖTEN ${index}`, quantity: 200, slot: index, id: index})),
    clothes: [{ name: `KRÖTEN 400`, quantity: 200, slot: 0, id: 400}, { name: `KRÖTEN 500`, quantity: 200, slot: 1, id: 500}],
    weapons : [{ name: `KRÖTEN 500`, quantity: 200, slot: 1, id: 500}],
    playerName: "AYDEN JOHNSON",
  };

  componentDidMount() {
    if ("alt" in window) {
      // eslint-disable-next-line no-undef
      alt.on("initInventory", (content, clothes, weapons, playerName) => {
        this.setState({
          content, clothes, weapons, playerName
        })
      })
    }
  }

  handleChangeItemSlot = (newContext, newSlot, item) => {
    const isSwap = this.state[newContext].find(elmt => elmt.slot === newSlot);

    let newState = {
      [item.context]: this.state[item.context].filter(elmt => elmt.id !== item.data.id),
    }

    newState = {
      ...newState,
      [newContext]: [...(newState[newContext] || this.state[newContext]), { ...item.data, slot: newSlot }],
    }

    if (isSwap) {
      console.log(isSwap);
      newState = {
        ...newState,
        [newContext]: (newState[newContext] || this.state[newContext]).filter(elmt => elmt.id !== isSwap.id),
      }

      newState = {
        ...newState,
        [item.context]: [...(newState[item.context] || this.state[item.context]), { ...isSwap, slot: item.data.slot }],
      }
    }

    this.setState(newState);

    if ("alt" in window) {
      // eslint-disable-next-line no-undef
      alt.emit('moveItem') // TODO: send data to altv client
    }
  }

  render() {
    const {content, clothes, weapons, playerName} = this.state;

    return (
      <DndProvider backend={Backend}>
        <div id="container">
          <div id="left_content">
            <Clothings name={playerName} clothes={clothes} onChange={this.handleChangeItemSlot} />
            <Weapons weapons={weapons} onChange={this.handleChangeItemSlot} />
          </div>
          {/* <Clothings
            items={content.Items}
            onChange={this.handleChangeItemSlot}
          />
          <Weapons
            items={content.Items}
            onChange={this.handleChangeItemSlot}}
          /> */}
          <Content items={content} onChange={this.handleChangeItemSlot} />
        </div>
        <CustomDragLayer />
      </DndProvider>
    );
  }
}

/**
 * Export
 */
export default MyInventory;
