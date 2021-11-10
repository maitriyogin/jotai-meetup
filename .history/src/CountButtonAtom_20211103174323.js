import React from "react";
import { useFocusAtom } from "./count-atom";
export const CountButtonAtom = ({ id }) => {
  const [count, setCount] = useFocusAtom(id);
  console.log(`------ RERENDER COUNT ATOM ${id} : ${count}`);
  return (
    <button onClick={() => setCount(count + 1)} class="Count-Button">
      Count Button Atom {id} : {count}
    </button>
  );
};
