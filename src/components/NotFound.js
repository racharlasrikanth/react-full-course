import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 NotFound</h1>
      <button onClick={() => navigate("/")}>back to home page</button>
    </div>
  );
}

export default NotFound;
