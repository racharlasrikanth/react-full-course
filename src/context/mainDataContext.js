import React from "react";

const initialState = [
  {
    firstName: "emma",
    lastName: "watson",
    email: "emma@gmail.com",
  },
  {
    firstName: "hlo",
    lastName: "hsdfan",
    email: "helo@gmail.com",
  },
];

export const MainDataContext = React.createContext();

export const MainDataContextProvider = ({ children }) => {
  return (
    <MainDataContext.Provider value={initialState}>
      {children}
    </MainDataContext.Provider>
  );
};
