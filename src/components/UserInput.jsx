import { useState } from "react";

export default function UserInput({ text, id }) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUpdate(event) {
    const { value } = event.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [id]: Number(value),
    }));
  }
  console.log(userInput[id]);

  return (
    <div className="input-group">
      <div>
        <label htmlFor={id}>{text}</label>
        <input
          type="number"
          id={id}
          required
          onChange={handleUpdate}
          value={userInput[id]}
        />
      </div>
    </div>
  );
}
