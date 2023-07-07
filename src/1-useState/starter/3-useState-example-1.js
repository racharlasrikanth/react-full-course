import React, { useState } from "react";

const Index =() => {
    const [showData,setShowData] = useState(true);

    const handleChange =() => {
        setShowData(!showData) ;
    }


    return (
        <div>
            <button onClick={handleChange}>{showData ? "Hide" : "Show"}</button>
            <br/>
            {showData ? (
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
          cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          quaerat ipsum rem vitae soluta autem porro ex enim veritatis?
          Asperiores?
            </div>) : "Data is Hidden"}
        </div>
    );
}

export default Index;