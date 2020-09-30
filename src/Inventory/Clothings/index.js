/**
 * Global import
 */
import React, { useState } from "react";

/**
 * Local import
 */
import './clothings.css';
import Slot from './Slot';
import Item from '../Item';

import glasses from '../../images/glasses.png'
import mask from '../../images/mask.png'
import hat from '../../images/hat.png'
import tie from '../../images/tie.png'
import shirt from '../../images/shirt.png'
import hoodie from '../../images/hoodie.png'
import bracelet from '../../images/bracelet.png'
import trousers from '../../images/trousers.png'
import watch from '../../images/watch.png'
import Vest_hr from '../../images/Vest_hr.png'
import phone from '../../images/phone.png'
import sneakers from '../../images/sneakers.png'

const images = [
  glasses,
  mask,
  hat,
  tie,
  shirt,
  hoodie,
  bracelet,
  trousers,
  watch,
  Vest_hr,
  sneakers,
  phone,
]

/**
 * Component
 */
const Clothings = ({ name, clothes, onChange }) => {
  const [itemDrag, setItemDrag] = useState(null);

  const handleDragItem = (id) => (state) => {
    setItemDrag(state ? id : null)
  };

  return (
    <div id="clothes">
      <h2>{name}</h2>
      <div id="clothes_items">
        {images.map((elmt, index) => (
          <Slot key={index} id={index} context="clothes" onChange={onChange}>
            <div className="clothes_img">
              <img src={elmt} alt={`clothes ${index}`} />
            </div>
            {clothes?.find(item => item.slot === index) && (
              <Item
                id={index}
                data={clothes.find(item => item.slot === index)}
                onDrag={handleDragItem(clothes.find(item => item.slot === index).id)}
                isDrag={itemDrag === clothes.find(item => item.slot === index).id}
                context="clothes"
              />
            )}
          </Slot>
        ))}
      </div>
    </div>
  );
}

/**
 * Export
 */
export default Clothings;
