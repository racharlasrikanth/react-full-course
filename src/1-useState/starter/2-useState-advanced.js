import React, { useState } from "react";

const Index =() => {

    // Creating an array list of items to display object data on screen
    const Array = [
        {id:'1',firstName:'Emma',lastName:"Watson",age:25},
        {id:'2',firstName: 'Oliver', lastName: "Queen", age:30 },
        {id:'3',firstName: 'Sophia',lastName:"Clarkson",age:19},
        {id:'4',firstName:'Isabella',lastName:"Johnson",age:28 },
    ];


    // creating useState functions
    const [itemData, deleteItem] = useState(Array)
    
    const deletefunction =(comingid) => {
        console.log("delete function called")
        const newDataList  = itemData.filter((eachItem) => {
            return eachItem.id !== comingid;
        });

        deleteItem(newDataList);
    };

    //return
    return (
    <div>
        <ul>
            {itemData.map((eachItem, index) => {
                const {id,firstName,lastName,age}= eachItem;

                return (
                    <li key={index}>
                        <div>
                            First Name : {firstName}
                        </div>
                        <div>
                            Last Name: {lastName}
                        </div>
                        <div>
                            Age : {age}
                        </div>
                        <button onClick={()=>deletefunction(id)}>Delete Item</button>
                    </li>
                );
            })}
        </ul>
    </div>
    );
};

export default Index;