import "./App.css";
import { useAppollo } from "./apollo-client";
import { useAtom } from "jotai";
import { Count1 } from "./Count1";
import { Count2 } from "./Count2";
import { Count3, CountTotal } from "./Count3";
import { totalCount } from "./count-atom";
function App() {
  // const tc = useAtom(totalCount);
  const messages = useApollo();
  return (
    <div className="App">
      <header className="App-header">
        Total Count : <CountTotal />
      </header>
      <div className="Count-Container">
        {messages.map((m, i) => (
          <div key={i}>{JSON.stringify(m)}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
