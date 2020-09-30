/**
 * Global import
 */
import React from "react";
import { useDrag } from "react-dnd";

/**
 * Local import
 */

/**
 * Component
 */
const Drag = (props) => {
  const [, drag] = useDrag({
    item: {
      id: props.id,
      type: "BOX",
      data: props.data,
      context: props.context,
    },
    begin: () => {
      props.onDrag(true);
    },
    end: () => {
      props.onDrag(false);
    },
    canDrag: !props.data.Locked,
  });

  return (
    <>
      <div data-tip={props.data.Id} style={{ width: '100%', height: '100%' }} onDoubleClick={props.handleDoubleClick} ref={drag}>
        {props.children}
      </div>
    </>
  );
}

/**
 * Export
 */
export default Drag;
