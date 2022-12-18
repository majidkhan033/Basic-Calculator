import './App.css';
import { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  let doCalculation = (type) => {
    switch (type) {
      case "ADD":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "SUBTRACT":
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case "MULTIPLY":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case "DIVISION":
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
      default:
        throw new Error("Use Valid Operation");
    }
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type={"number"} placeholder={"Enter 1st Number"}
          onChange={(e) => {
            setFirstNumber(e.target.value)
          }}
          value={firstNumber} />
        <input type={"number"} placeholder={"Enter 2nd Number"}
          onChange={(e) => {
            setSecondNumber(e.target.value)
          }}
          value={secondNumber} />

        <button onClick={(e) => doCalculation("ADD")}>Add </button>
        <button onClick={(e) => doCalculation("SUBTRACT")}>Subtract </button>
        <button onClick={(e) => doCalculation("MULTIPLY")}>Multiply </button>
        <button onClick={(e) => doCalculation("DIVISION")}>Divide </button>

        <h4>result is : {result}</h4>

      </form>
    </div>

  );
}

export default App;
