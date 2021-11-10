import "./App.css";

import { Count1 } from "./Count1";
function App() {
  return (
    <div className="App">
      <header className="App-header">Total Count : {0} ??</header>
      <div className="Count-Container">
        <Count1 />
        <Count2 />
      </div>
    </div>
  );
}

export default App;
