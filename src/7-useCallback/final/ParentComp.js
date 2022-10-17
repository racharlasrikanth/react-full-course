import React, { useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./Count";

const ParentComp = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(7000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <Title />
      <Count text={"age"} number={age} />
      <Button clickHandler={incrementAge}>increment age</Button>
      <Count text={"salary"} number={salary} />
      <Button clickHandler={incrementSalary}>increment salary</Button>
    </>
  );
};

export default ParentComp;
