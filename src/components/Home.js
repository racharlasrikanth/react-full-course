import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToSuccessPage = () => {
    navigate("/success");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={navigateToSuccessPage}>submit form</button>
    </div>
  );
}

export default Home;
