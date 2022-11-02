import React, { useState } from "react";
import useCounter from "./useCounter";

const FirstCounter = () => {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h1>Count == {count}</h1>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default FirstCounter;
