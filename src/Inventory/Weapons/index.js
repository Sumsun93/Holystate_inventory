/**
 * Global import
 */
import React, { useState } from "react";

/**
 * Local import
 */
import Slot from "./Slot";
import Item from "../Item";

import Gun1 from '../../images/Gun1.png';
import Gun2 from '../../images/Gun2.png';
import Gun3 from '../../images/Gun3.png';
// import Keys_IMG from "../../images/Keys_IMG.png";
// import id from "../../images/id-card.png";
// import backpack_h from "../../images/backpack_h.png";

import './weapons.css';

/**
 * Component
 */
const Weapons = ({ weapons, onChange }) => {
  const [itemDrag, setItemDrag] = useState(null);

  const handleDragItem = (id) => (state) => {
    setItemDrag(state ? id : null);
  };

  return (
    <div id="weapons">
      <div>
        <h3>PRIMÄR</h3>
        <Slot context="weapons" id={0} onChange={onChange}>
          <div className="weapons_img">
            <img src={Gun1} alt="gun1" />
          </div>
          {weapons?.find(item => item.slot === 0) && (
            <Item
              id={0}
              data={weapons.find(item => item.slot === 0)}
              onDrag={handleDragItem(weapons.find(item => item.slot === 0).id)}
              isDrag={itemDrag === weapons.find(item => item.slot === 0).id}
              context="weapons"
            />
          )}
        </Slot>
      </div>
      <div>
        <h3>PRIMÄR</h3>
        <Slot context="weapons" id={1} onChange={onChange}>
          <div className="weapons_img">
            <img src={Gun2} alt="gun2" />
          </div>
          {weapons?.find(item => item.slot === 1) && (
            <Item
              id={1}
              data={weapons.find(item => item.slot === 1)}
              onDrag={handleDragItem(weapons.find(item => item.slot === 1).id)}
              isDrag={itemDrag === weapons.find(item => item.slot === 1).id}
              context="weapons"
            />
          )}
        </Slot>
      </div>
      <div>
        <h3>NAHKAMPF</h3>
        <Slot context="weapons" id={2} onChange={onChange}>
          <div className="weapons_img">
            <img src={Gun3} alt="gun3" />
          </div>
          {weapons?.find(item => item.slot === 2) && (
            <Item
              id={2}
              data={weapons.find(item => item.slot === 2)}
              onDrag={handleDragItem(weapons.find(item => item.slot === 2).id)}
              isDrag={itemDrag === weapons.find(item => item.slot === 2).id}
              context="weapons"
            />
          )}
        </Slot>
      </div>
    </div>
  );
}

/**
 * Export
 */
export default Weapons;
