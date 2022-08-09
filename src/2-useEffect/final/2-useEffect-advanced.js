import React, { useEffect, useState } from "react";

const Final = () => {
  const [count, setCount] = useState(0);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      setPageWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);
    console.log("Hello I am coming from useEffect", count);

    return () => {
      console.log("I am removing");
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return (
    <div>
      <h1>Learn useEffect</h1>
      <h1>{pageWidth}</h1>
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
