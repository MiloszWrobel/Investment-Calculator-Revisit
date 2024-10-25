import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";
function App() {
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
      <Header />
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

export default App;
