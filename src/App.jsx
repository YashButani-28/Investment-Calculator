import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  const initialInvestmentValid=userInput.initialInvestment>=1;
  const annualInvestmentValid=userInput.annualInvestment>=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />

      if{!inputIsValid && (
        <p className="center">Please enter a duration greater than Zero. </p>
      )}
      if{!initialInvestmentValid && (
        <p className="center">Please enter a Initial Investment greater than Zero. </p>
      )}
      if{!annualInvestmentValid && (
        <p className="center">Please enter a annual Investment greater than Zero. </p>
      )}


      {(inputIsValid && initialInvestmentValid && annualInvestmentValid ) && <Result input={userInput}/>}
    </>
  );
}

export default App;
