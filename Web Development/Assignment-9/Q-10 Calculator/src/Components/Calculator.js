import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (value) => {
    setDisplayValue((prevDisplay) => prevDisplay + value);
  };

  const appendOperationToDisplay = (operation) => {
    setDisplayValue((prevDisplay) => prevDisplay + ' ' + operation + ' ');
  };

  const calculate = () => {
    try {
      const result = eval(displayValue); // Using eval() for simplicity, but it has security implications in real-world scenarios
      setDisplayValue(result.toString());
    } catch (error) {
      console.error('Error occurred during calculation:', error);
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  return (
    <div className="container">
      <div className="calculator-box">
        <div className="input-container">
          <input type="text" id="display" value={displayValue} disabled />
          <button className="clear-button" onClick={clearDisplay}>
            Clear
          </button>
        </div>
        <div className="row">
          <button className="yellow-btn" onClick={() => appendOperationToDisplay('+')}>
            +
          </button>
          <div className="wide" />
          <button id="equal-button" className="yellow-btn" onClick={calculate}>
            =
          </button>
        </div>
        <div className="row">
          <button className="yellow-btn" onClick={() => appendOperationToDisplay('-')}>
            -
          </button>
          <button className="yellow-btn" onClick={() => appendOperationToDisplay('*')}>
            *
          </button>
          <button className="yellow-btn" onClick={() => appendOperationToDisplay('/')}>
            /
          </button>
        </div>
        <div className="row">
          <button onClick={() => appendToDisplay('1')}>1</button>
          <button onClick={() => appendToDisplay('2')}>2</button>
          <button onClick={() => appendToDisplay('3')}>3</button>
        </div>
        <div className="row">
          <button onClick={() => appendToDisplay('4')}>4</button>
          <button onClick={() => appendToDisplay('5')}>5</button>
          <button onClick={() => appendToDisplay('6')}>6</button>
        </div>
        <div className="row">
          <button onClick={() => appendToDisplay('7')}>7</button>
          <button onClick={() => appendToDisplay('8')}>8</button>
          <button onClick={() => appendToDisplay('9')}>9</button>
        </div>
        <div className="row">
          <button className="wide" onClick={() => appendToDisplay('0')}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;