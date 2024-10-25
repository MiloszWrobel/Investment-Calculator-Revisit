import UserInput from "./UserInput";
import { useState } from "react";
import { calculateInvestment } from "../util/calculateBitcoinInvestment";

export default function BitcoinDisplay() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    yearOfInvestment: 2003,
  });

  const [calculatedValue, setCalculatedValue] = useState(null);

  function handleUpdate(event) {
    const { id, value } = event.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [id]: Number(value),
    }));
  }

  function handleCalculate() {
    const value = calculateInvestment(
      userInput.initialInvestment,
      userInput.yearOfInvestment
    );
    setCalculatedValue(value);
  }

  return (
    <main>
      <section id="user-input">
        <div className="input-grid">
          <UserInput
            text="Initial Investment"
            id="initialInvestment"
            onChange={handleUpdate}
            input={userInput}
          />
          <UserInput
            text="Amount invested in year"
            id="yearOfInvestment"
            onChange={handleUpdate}
            input={userInput}
          />
        </div>
        <button className="calculate-button" onClick={handleCalculate}>
          Calculate how much money you would have today
        </button>
        {calculatedValue && (
          <p>Your investment would be worth £{calculatedValue} today.</p>
        )}
      </section>
    </main>
  );
}
