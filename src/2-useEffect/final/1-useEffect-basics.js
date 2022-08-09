import React, { useEffect, useState } from "react";

const Final = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello I am coming from useEffect", count);
  }, []);

  return (
    <div>
      <h1>Learn useEffect hello</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Final;
