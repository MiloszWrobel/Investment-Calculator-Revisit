import { useState } from "react";
import Header from "./components/Header";
import InvestmentDisplay from "./components/InvestmentDisplay";

function App() {
  const [mode, setMode] = useState("");

  function handleClick(value) {
    setMode(value);
  }
  return (
    <>
      <Header />
      {mode === "invest" ? <InvestmentDisplay /> : undefined}
      {mode === "" ? (
        <div className="button-container">
          <button className="button" onClick={() => handleClick("invest")}>
            Investment calculator
          </button>
          <button className="button"> Bitcoin calculator</button>
        </div>
      ) : undefined}
    </>
  );
}

export default App;
