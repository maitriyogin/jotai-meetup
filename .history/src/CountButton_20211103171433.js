import React from "react";

export const CountButton = ({ id, count, onClick }) => {
  useEffect(() => {
    console.log(`------ RERENDER COUNT ${id} : ${count}`);
  }, [count]);
  return (
    <button onClick={onClick} class="Count-Button">
      Count Button {id} : {count}
    </button>
  );
};
