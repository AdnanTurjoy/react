import React, { useState } from "react";
import NewTodo from "./newTodo";
import Todos from "./Todos";
function HomeTodos() {
  const [todo, setTodo] = useState(["adnan1", "Turjoy2"]);
  const [modal, setModal] = useState(false);
  const handleAddTodo = (add) => {
    setTodo([...todo, add]);
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  return (
    <div>
      {modal && (
        <p
          style={{
            backgroundColor: "#52f794",
            width: "500px",
            textAlign: "center",
            margin: "auto",
          }}
        >
          Todo is added
        </p>
      )}
      <NewTodo addTodo={handleAddTodo} />

      <Todos todos={todo} />
    </div>
  );
}

export default HomeTodos;
