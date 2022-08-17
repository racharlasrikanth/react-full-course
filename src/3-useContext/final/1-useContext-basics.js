import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>useContext Parent Component</h1>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
