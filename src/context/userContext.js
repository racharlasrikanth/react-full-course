import React from "react";

const initialState = {
  firstName: "emma",
  lastName: "watson",
  email: "emma@gmail.com",
};

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};
