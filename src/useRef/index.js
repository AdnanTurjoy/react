import React from "react";
import { useRef } from "react";

function UseRef() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    console.log({ name, password });
  };

  return (
    <div>
      <form action="" onSubmit={handleForm}>
        <div>
          <label htmlFor="">Name: </label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="">password: </label>
          <input type="password" ref={passwordRef} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UseRef;
