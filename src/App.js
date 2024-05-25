import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [emi, setEmi] = useState(0);
  function calculateEMI() {
    let r = interest;
    if (principal && r && year) {
      r = r / 12 / 100;
      const calcPow = Math.pow(1 + r, year * 12);
      const amount = principal * r * (calcPow / (calcPow - 1));

      setEmi(Math.round(amount));
    }
    // Formulas for Interests (Simple and Compound)
    //SI Formula	S.I. = Principal × Rate × Time
    //CI Formula	C.I. = Principal (1 + Rate)Time − Principal//
  }

  useEffect(() => {
    calculateEMI();
  }, [principal, interest, year]);

  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "principal") {
      setPrincipal(value);
    } else if (id === "interest") {
      setInterest(value);
    } else {
      setYear(value);
    }
  };

  return (
    <div className="loan-calc">
      <h1>Mortgage Calculator</h1>
      <div className="inputes">
        <p>principle:</p>
        <input onChange={handleInput} type="number" id="principal" />

        <p>Interest:</p>
        <input onChange={handleInput} type="number" id="interest" />

        <p>Year:</p>
        <input onChange={handleInput} type="number" id="year" />
      </div>
      <div className="output">Your EMI is {emi}</div>
    </div>
  );
}

export default App;
