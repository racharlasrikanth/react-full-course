import React, { useState } from "react";

const enhancedCounter = (OriginalComponent, incrementNumber) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + incrementNumber);
    };

    return (
      <OriginalComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };

  return NewComponent;
};

export default enhancedCounter;
