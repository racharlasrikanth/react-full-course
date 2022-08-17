import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { MainDataContext } from "../../context/mainDataContext";

const SubChildCompmonent = () => {
  const data = useContext(UserContext);
  const mainData = useContext(MainDataContext);

  console.log(mainData);

  const { firstName, lastName, email } = data;

  return (
    <div>
      <h3>Sub child component</h3>
      <div>firstName:{firstName}</div>
      <div>lastname:{lastName}</div>
      <div>email:{email}</div>
    </div>
  );
};

export default SubChildCompmonent;
