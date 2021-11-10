import React, { useState } from "react";
import { CountButton } from "./CountButton";
export const Count1 = () => {
  const [count, setCount] = useState({ a: 0, b0 });
  return (
    <div>
      <h4>Count</h4>
      <div>
        <h5>Count Buttons</h5>
        <CountButton
          id={"A"}
          count={count.a}
          onClick={() => setCountA({ ...count, a: count.a + 1 })}
        />
        <CountButton
          id={"B"}
          count={count.b}
          onClick={() => setCountB(countB + 1)}
        />
      </div>
    </div>
  );
};
