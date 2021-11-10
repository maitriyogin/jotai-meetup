import React from "react";
import { useAtom } from "jotai";
import { CountButtonAtom } from "./CountButtonAtom";
import { countAtom, totalCount } from "./count-atom";
export const CountTotal = () => {
  const [count] = useAtom(countAtom);
  // const tc = useAtom(totalCount);
  return <span>{count.a + count.b}</span>;
};
export const Count3 = () => {
  return (
    <div>
      <h4>
        Count With Jotai <CountTotal />
      </h4>
      <div>
        <h5>Count Buttons</h5>
        <CountButtonAtom id={"a"} />
        <CountButtonAtom id={"b"} />
      </div>
    </div>
  );
};
