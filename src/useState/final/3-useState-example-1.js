import React, { useState } from "react";

const Index = () => {
  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(!showData);
  };

  return (
    <div>
      <button onClick={handleChange}>{showData ? "hide" : "show"}</button>
      {/* {showData && (
        <div className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
          cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          quaerat ipsum rem vitae soluta autem porro ex enim veritatis?
          Asperiores?
        </div>
      )} */}
      {showData ? (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quia
          quisquam, ullam cupiditate asperiores commodi dolorum. Tempora, ab.
          Molestiae libero quidem ex, dignissimos possimus assumenda itaque
          reiciendis quos voluptate magnam.
        </div>
      ) : (
        <h3>data is hidden</h3>
      )}
    </div>
  );
};

export default Index;
