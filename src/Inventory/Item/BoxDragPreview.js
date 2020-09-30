import React, { memo } from "react";

import Box from "./Box";

const BoxDragPreview = memo(({ data }) => {
  return (
    <div className="slot">
      <Box data={data} />
    </div>
  );
});
export default BoxDragPreview;
