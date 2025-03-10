import React, { useState } from 'react' 
const Calculator = () => {
    const [display, setDisplay] = useState("0");
    const [prevValue, setPrevValue] = useState(null);
    const [operator, setOperator] = useState(null);
  
    const handleNumberClick = (num) => {
      setDisplay((prev) => (prev === "0" ? num : prev + num));
    };
  
    const handleOperatorClick = (op) => {
      if (prevValue !== null && operator !== null) {
        handleEqualClick();
      }
      setPrevValue(display);
      setOperator(op);
      setDisplay("0");
    };
  
    const handleEqualClick = () => {
      if (!prevValue || !operator) return;
  
      const current = parseFloat(display);
      const previous = parseFloat(prevValue);
  
      let result;
      switch (operator) {
        case "+":
          result = previous + current;
          break;
        case "-":
          result = previous - current;
          break;
        case "X":
          result = previous * current;
          break;
        case "/":
          result = previous / current;
          break;
        default:
          return;
      }
  
      setDisplay(result.toString());
      setPrevValue(null);
      setOperator(null);
    };
  
    const handleClear = () => {
      setDisplay("0");
      setPrevValue(null);
      setOperator(null);
    };
  
  
    return (
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={handleClear}>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button onClick={() => handleOperatorClick("/")} className="operator">/</button>
  
          <button onClick={() => handleNumberClick("7")}>7</button>
          <button onClick={() => handleNumberClick("8")}>8</button>
          <button onClick={() => handleNumberClick("9")}>9</button>
          <button onClick={() => handleOperatorClick("X")} className="operator">X</button>
  
          <button onClick={() => handleNumberClick("4")}>4</button>
          <button onClick={() => handleNumberClick("5")}>5</button>
          <button onClick={() => handleNumberClick("6")}>6</button>
          <button onClick={() => handleOperatorClick("-")} className="operator">-</button>
  
          <button onClick={() => handleNumberClick("1")}>1</button>
          <button onClick={() => handleNumberClick("2")}>2</button>
          <button onClick={() => handleNumberClick("3")}>3</button>
          <button onClick={() => handleOperatorClick("+")} className="operator">+</button>
  
          <button onClick={() => handleNumberClick("0")}>0</button>
          <button onClick={() => handleNumberClick(".")}>.</button>
          <button className="equal" onClick={handleEqualClick}>=</button>
        </div>
      </div>
    );
  };
  
  export default Calculator;