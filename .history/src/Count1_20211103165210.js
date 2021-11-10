import React from "react";
import { CountButton } from "./CountButton";
export const Count1 = () => {
  return (
    <div>
      <h4>Count</h4>
      <div>
        <h5>Count Buttons</h5>
        <CountButton id={"A"} />
        <CountButton id={"B"} />
      </div>
    </div>
  );
};
