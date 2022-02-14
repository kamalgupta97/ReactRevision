import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Child } from "./Child";

function App() {
  const [frequency, setFrequency] = React.useState(10);
  // React.useEffect(() => {}, [frequency]);
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <>
        <input
          type="text"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
        <Child count={count} setCount={setCount} />;
      </>
      Kamal React App
    </div>
  );
}

export default App;
