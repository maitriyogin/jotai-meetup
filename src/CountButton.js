import React from "react";

export const CountButton = ({ id, count, onClick }) => {
  console.log(`------ RERENDER COUNT ${id} : ${count}`);
  return (
    <button onClick={onClick} class="Count-Button">
      Count Button {id} : {count}
    </button>
  );
};
