import React, { useState, useMemo, useEffect } from "react";

const Final = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeChange = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeChange]);

  return (
    <>
      <div>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
      <br />
      <div>
        <button onClick={() => setDark(!dark)}>change theme</button>
      </div>
      <h2 style={themeChange}>the number : {doubleNumber}</h2>
    </>
  );
};

const slowFunction = (number) => {
  for (let index = 0; index < 1000000000; index++) {}
  console.log("slow fun running");
  return number * 2;
};

export default Final;
