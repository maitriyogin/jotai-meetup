import logo from "./logo.svg";
import "./App.css";

import { Count1 } from "./Count1";
function App() {
  return (
    <div className="App">
      <header className="App-header">Total Count : {0} ??</header>

      <Count1 />
    </div>
  );
}

export default App;
