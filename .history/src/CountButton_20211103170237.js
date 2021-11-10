import React from "react";

export const CountButton = ({ id, count, onClick }) => (
  <button onClick={onClick} class="Count-Button">
    Count Button {id} : {count}
  </button>
);
