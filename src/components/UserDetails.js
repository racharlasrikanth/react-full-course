import React from "react";
import { useParams } from "react-router-dom";
import userData from "./usersData";

function UserDetails() {
  const { userId } = useParams();

  const userDetailsData = userData.find((eachUser) => eachUser.id == userId);

  return (
    <div>
      <h1>UserDetails</h1>

      <h2>{userDetailsData.name}</h2>
      <h3>{userDetailsData.email}</h3>
      <h3>{userDetailsData.username}</h3>
      <p>{userDetailsData.phone}</p>
    </div>
  );
}

export default UserDetails;
