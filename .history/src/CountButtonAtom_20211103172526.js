import React from "react";
import { useSelectAtom } from "./count-atom";
export const CountButtonAtom = ({ id }) => {
  const [count, setCount] = useSelectAtom(id);
  console.log(`------ RERENDER COUNT ${id} : ${count}`);
  return (
    <button onClick={() => setCount(count + 1)} class="Count-Button">
      Count Button {id} : {count}
    </button>
  );
};
