import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <ConcentricSqaures num={400} />
      </header>
    </div>
  );
}

export default App;
function ConcentricSqaures({ num }) {
  if (num == 0) return <div></div>;
  num -= 4;
  return (
    <div
      style={{
        width: num,
        height: num,
        border: "2px solid red",
      }}
    >
      <ConcentricSqaures num={num} />
    </div>
  );
}
