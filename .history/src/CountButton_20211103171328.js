import React from "react";

export const CountButton = ({ id, count, onClick }) => {
  return (
    <button onClick={onClick} class="Count-Button">
      Count Button {id} : {count}
    </button>
  );
};
