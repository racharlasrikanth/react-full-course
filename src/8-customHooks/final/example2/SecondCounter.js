import React, { useState } from "react";
import useCounter from "./useCounter";

const SecondCounter = () => {
  const [count, increment, decrement, reset] = useCounter(10);

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

export default SecondCounter;
