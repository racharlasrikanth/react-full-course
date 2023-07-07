import React, { useState } from "react";

const Index = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });
  const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false,
  });

  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };

  const handleDelete = (id) => {
    let newTodos = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    setList(newTodos);
  };

  const changeEditState = (id) => {
    setEditingItem({
      ...editingItem,
      id: id,
      isEditing: true,
    });
    let editableItem = list.find((eachItem) => eachItem.id === id);
    setMessage({
      ...message,
      text: editableItem.text,
      id: editableItem.id,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("previous todos", list);
    let newTodos = list.map((eachItem) => {
      if (eachItem.id === editingItem.id) {
        return {
          text: message.text,
          id: editingItem.id,
        };
      } else {
        return eachItem;
      }
    });
    setList(newTodos);
    setMessage({
      text: "",
      id: "",
    });
    setEditingItem({
      id: "",
      isEditing: false,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="enter some text"
          value={message.text}
          onChange={changeMessage}
        />
        {editingItem.isEditing ? (
          <button onClick={handleEdit} type="submit">
            edit
          </button>
        ) : (
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        )}
      </form>
      <hr />
      {list.length === 0 && <h4>There is no items in the list</h4>}
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => changeEditState(id)}>edit</button>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
