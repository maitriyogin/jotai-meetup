import React from "react";

export const CountButton = ({ id, count, onClick }) => (
  <Button onClick={onClick}>
    Count Button {id} : {count}
  </Button>
);
