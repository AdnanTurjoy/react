import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <div>
      {toggle && (
        <p
          style={{
            backgroundColor: "pink",
            margin: "40px",
            padding: "20px",
            weight: "45px",
          }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary.
        </p>
      )}
      

      <button
        type="button"
        class="btn btn-outline-success"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Hide" : "show"}
      </button>
    </div>
  );
}

export default Toggle;
