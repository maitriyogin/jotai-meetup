import "./App.css";

import { useAtom } from "jotai";
import { Count1 } from "./Count1";
import { Count2 } from "./Count2";
import { Count3 } from "./Count3";
import { totalCount } from "./count-atom";
function App() {
  const tc = useAtom(totalCount);
  return (
    <div className="App">
      <header className="App-header">Total Count : {tc} ??</header>
      <div className="Count-Container">
        <Count1 />
        <Count2 />
        <Count3 />
      </div>
    </div>
  );
}

export default App;
