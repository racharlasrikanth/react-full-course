import React, { useReducer } from "react";
import { isDOMComponent } from "react-dom/test-utils";

const reducer = (state, action) => {
  if (action.type === "DELETE_PERSON") {
    const newPersons = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    return {
      ...state,
      data: newPersons,
      length: state.length - 1,
    };
  }

  return state;
};

const Final = () => {
  const initialState = {
    data: [
      { id: "23432423", firstName: "srikanth", email: "srikanth@emgail.com" },
      { id: "rer3", firstName: "emma", email: "emma@emgail.com" },
    ],
    length: 2,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };

  const handleEdit = (id) => {
    dispatch({
      type: "UPDATE_PERSON",
      payload: id,
    });
  };

  return (
    <div>
      <h1>Current users length : {state.length}</h1>
      {state.data.map((eachItem) => {
        const { id, firstName, email } = eachItem;
        return (
          <div key={id}>
            <h3>{firstName}</h3>
            <p>{email}</p>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={() => handleEdit(id)}>edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Final;
