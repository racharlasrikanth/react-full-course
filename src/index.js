import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/userContext";
import { MainDataContextProvider } from "./context/mainDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainDataContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </MainDataContextProvider>
);
