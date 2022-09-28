import React, { useState } from "react";
function NewTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");
  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo); // child to parent system
    setNewTodo("");
  };
  console.log("newTodo:", newTodo);
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Add Your Todo: </label>
        <input
          type="text"
          onChange={handleNewTodo}
          value={newTodo}
          name="newNode"
        />
        <button type="submit"> Submit</button>
      </div>
    </form>
  );
}

export default NewTodo;
