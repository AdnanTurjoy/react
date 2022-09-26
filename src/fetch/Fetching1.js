import React from "react";
import { useState, useEffect } from "react";

function Fetching1() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTodos(data);
          console.log(todos);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      {loading && "It is Loading"}
      {todos &&
        todos.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
}

export default Fetching1;
