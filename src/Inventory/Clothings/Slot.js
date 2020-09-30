/**
 * Global import
 */
import React from "react";
import { useDrop } from "react-dnd";


/**
 * Local import
 */

/**
 * Component
 */
const Slot = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [collectedProps, drop] = useDrop({
    accept: "BOX",
    drop: (elmt) => {
      props.onChange(props.context, props.id, elmt);
    },
  });

  return (
    <div disabled={props.disabled} className="clothes_slot" ref={drop}>
      {props.children}
    </div>
  )
}

/**
 * Export
 */
export default Slot;
