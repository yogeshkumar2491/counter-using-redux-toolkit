import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="button-div">
        <button className="button-inc" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>

      <span className="span">{count}</span>

      <div className="button-div">
        <button className="button-dec" onClick={() => setCount(count - 1)}>
          {" "}
          Decrement
        </button>
      </div>

      <div>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
