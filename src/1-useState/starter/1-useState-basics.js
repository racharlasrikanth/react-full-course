import React, { useState } from "react";


const Index = () => {

  const [firstName, setFirstName] = useState("Emma")
  const [lastName, setLastName] = useState("Watson")
  const [age,setAge] = useState(12)
  const [count, setCount] = useState(0)

    const nameChange =() => {
      setFirstName("Ashok")
      setLastName("Kumar")
      setAge(20)


    }

    const countIncrease =() => {
      setCount((count) => count+5)
    }

    const countDecrease =() => {
      setCount((count) => count-5)
    }




  return (
    <div>
      <h1>First Name: {firstName}</h1>
      <h1>Last Name: {lastName}</h1>
      <p>{`My age is ${age}`}</p>
      <button onClick={countDecrease}>-</button>
      <p>Counter:{count} </p>
      <button onClick={countIncrease}>+</button> <br/>
      <button onClick={nameChange}>Set Name</button>
    </div>
  );
};

export default Index;
