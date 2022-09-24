import React, { useState } from "react";

function Faq({ id, title, desc }) {
  const [toggle, setToggle] = useState(false);
  return (
    <article>
      <div key={id}>
        <h1>{title}</h1>
        <button onClick={() => setToggle(!toggle)} className="btn btn-primary">
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && (
        <p
          style={{
            backgroundColor: "gray",
            margin: "40px",
            padding: "20px",
            weight: "45px",
            border: "5px gray solid",
          }}
        >
          {desc}
        </p>
      )}
    </article>
  );
}

export default Faq;
