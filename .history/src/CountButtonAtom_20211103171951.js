import React, { useEffect } from "react";

export const CountButtonAtom = ({ id }) => {
  console.log(`------ RERENDER COUNT ${id} : ${count}`);
  return (
    <button onClick={onClick} class="Count-Button">
      Count Button {id} : {count}
    </button>
  );
};
