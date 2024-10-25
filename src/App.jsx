import { useState } from "react";
import Header from "./components/Header";
import InvestmentDisplay from "./components/InvestmentDisplay";
import BitcoinDisplay from "./components/BitcoinDisplay";

function App() {
  const [mode, setMode] = useState("");

  function handleClick(value) {
    setMode(value);
  }
  return (
    <>
      <Header />
      {mode === "invest" ? <InvestmentDisplay /> : undefined}
      {mode === "bitcoin" ? <BitcoinDisplay /> : undefined}
      {mode === "" ? (
        <div className="button-container">
          <button className="button" onClick={() => handleClick("invest")}>
            Investment calculator
          </button>
          <button className="button" onClick={() => handleClick("bitcoin")}>
            {" "}
            Bitcoin calculator
          </button>
        </div>
      ) : undefined}
    </>
  );
}

export default App;
