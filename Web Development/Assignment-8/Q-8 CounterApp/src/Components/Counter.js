import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("Values greater than 20 are not allowed.");
    }
  };

  const handleDecrement = () => {
    if (count > -20) {
      setCount(count - 1);
    } else {
      alert("Values less than -20 are not allowed.");
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2>Counter Website</h2>

      <div>
        <button onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button>
      </div>

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;