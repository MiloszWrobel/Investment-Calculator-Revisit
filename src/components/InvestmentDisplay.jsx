import UserInput from "./UserInput";
import Results from "./Results";
import { useState } from "react";

export default function InvestmentDisplay() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = userInput.duration >= 1;

  function handleUpdate(event) {
    const { id, value } = event.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [id]: Number(value),
    }));
  }
  return (
    <>
      <main>
        <section id="user-input">
          <h2 className="center">Enter Investment details</h2>
          <div className="input-grid">
            <UserInput
              text="Initial Investment"
              id="initialInvestment"
              onChange={handleUpdate}
              input={userInput}
            />
            <UserInput
              text="Annual Investment"
              id="annualInvestment"
              onChange={handleUpdate}
              input={userInput}
            />
            <UserInput
              text="Expected Return"
              id="expectedReturn"
              onChange={handleUpdate}
              input={userInput}
            />
            <UserInput
              text="Duration"
              id="duration"
              onChange={handleUpdate}
              input={userInput}
            />
          </div>
        </section>
      </main>
      {isValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Duration has to be greater than 0</p>
      )}
    </>
  );
}
