import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="main">
      <h1>COUNTER APP</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement} disabled={count === 0}>
        DECREMENT
      </button>
      <button onClick={reset} disabled={count === 0}>
        RESET
      </button>
    </div>
  );
};

export default Counter;
