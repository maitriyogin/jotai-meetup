import "./App.css";

import { useAtom } from "jotai";
import { Count1 } from "./Count1";
import { Count2 } from "./Count2";
import { Count3, CountTotal } from "./Count3";
import { totalCount } from "./count-atom";
function App() {
  // const tc = useAtom(totalCount);
  return (
    <div className="App">
      <header className="App-header">
        Total Count : <CountTotal />
      </header>
      <div className="Count-Container">
        <Count3 />
      </div>
    </div>
  );
}

export default App;
