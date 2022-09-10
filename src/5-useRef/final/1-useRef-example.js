import React, { useState, useEffect, useRef } from "react";

const Final = () => {
  const [firstName, setFirstName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <h5>Typing: {firstName}</h5>
      <h5>Component renderd {renderCount.current} times</h5>
    </>
  );
};

export default Final;
