import React from "react";

export const CountButton = ({ id, count, onClick }) => (
  <button onClick={onClick}>
    Count Button {id} : {count}
  </button>
);
