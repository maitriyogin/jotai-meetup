import React from "react";
import { useSelectAtom } from "./count-atom";
export const CountButtonAtom = ({ id }) => {
  useSelectAtom(id);
  console.log(`------ RERENDER COUNT ${id} : ${count}`);
  return (
    <button onClick={onClick} class="Count-Button">
      Count Button {id} : {count}
    </button>
  );
};
