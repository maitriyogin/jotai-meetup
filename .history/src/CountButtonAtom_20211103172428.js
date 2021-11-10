import React, { useEffect } from "react";

import { useAtom, selectAtom } from "jotai";
export const CountButtonAtom = ({ id }) => {
  useSelectAtom(id);
  console.log(`------ RERENDER COUNT ${id} : ${count}`);
  return (
    <button onClick={onClick} class="Count-Button">
      Count Button {id} : {count}
    </button>
  );
};
