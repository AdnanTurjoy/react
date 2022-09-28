import React from "react";
import { useState } from "react";
function UseReducer() {
  const data = [
    {
      id: 1,
      name: "Ognibina",
    },
    {
      id: 2,
      name: "Himu",
    },
    {
      id: 3,
      name: "opekkha",
    },
  ];
  const Modal = ({ modalText }) => {
    return <p style={{ color: "green" }}>{modalText}</p>;
  };

  const [books, setBooks] = useState(data);
  const [bookName, setBookName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: new Date().getTime().toString(),
      name: bookName,
    };
    setBooks([...books, newBook]);
    setModalOpen(true);
    setModalText("Book is Added");
    setTimeout(() => {
      setModalOpen(false);
    }, 2000);
  };
  return (
    <div>
      <h1>Book List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Book: </label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        {isModalOpen && <Modal modalText={modalText} />}
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      {books.map((book) => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
}

export default UseReducer;
