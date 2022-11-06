import React from "react";
import enhancedCounter from "./enhancedCounter";

const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}>
        {props.name} Counter Clicked {props.count} times
      </button>
    </div>
  );
};

export default enhancedCounter(ClickCounter, 10);
