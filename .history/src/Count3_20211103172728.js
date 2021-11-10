import React from "react";
import { useAtom } from "jotai";
import { CountButtonAtom } from "./CountButtonAtom";
export const CountTotal = () => {
  const [count] = useAtom({ a: 0, b: 0 });
  return <span>{count.a + count.b}</span>;
};
export const Count2 = () => {
  const [count] = useAtom({ a: 0, b: 0 });
  return (
    <div>
      <h4>Count With Jotai {count.a + count.b}</h4>
      <div>
        <h5>Count Buttons</h5>
        <CountButtonAtom id={"a"} />
        <CountButtonAtom id={"b"} />
      </div>
    </div>
  );
};
