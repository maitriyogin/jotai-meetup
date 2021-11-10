import React, { useState } from "react";
import { CountButton } from "./CountButton";
export const Count1 = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  return (
    <div>
      <h4>Count</h4>
      <div>
        <h5>Count Buttons</h5>
        <CountButton
          id={"A"}
          count={countA}
          onClick={() => setCountA(countA + 1)}
        />
        <CountButton
          id={"B"}
          count={countA}
          onClick={() => setCountB(countB + 1)}
        />
      </div>
    </div>
  );
};
