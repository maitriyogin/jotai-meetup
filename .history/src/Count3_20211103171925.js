import React from "react";

import { useAtom } from "jotai";
import { CountButton } from "./CountButton";
export const Count2 = () => {
  const [count, setCount] = useAtom({ a: 0, b: 0 });
  return (
    <div>
      <h4>Count With Obj {count.a + count.b}</h4>
      <div>
        <h5>Count Buttons</h5>
        <CountButton
          id={"A"}
          count={count.a}
          onClick={() => setCount({ ...count, a: count.a + 1 })}
        />
        <CountButton
          id={"B"}
          count={count.b}
          onClick={() => setCount({ ...count, b: count.b + 1 })}
        />
      </div>
    </div>
  );
};
