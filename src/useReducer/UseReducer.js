import React from "react";
import { useReducer } from "react";
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
  const [bookName, setBookName] = useState("");

  const reducer = (state, action) => {
    if (action.type === "ADD") {
      const allBooks = [...state.books, action.payload];
      return {
        ...state,
        books: allBooks,
        isModalOpen: true,
        modalText: "Book has been added",
      };
    }
    if (action.type === "REMOVE") {
      const filterBook = [...state.books].filter(
        (book) => book.id !== action.payload
      );
      return {
        ...state,
        books: filterBook,
        isModalOpen: true,
        modalText: "Book has been Removed",
      };
    }
  };
  const initialState = {
    books: data,
    isModalOpen: false,
    modalText: "",
  };

  const [bookState, dispatch] = useReducer(reducer, initialState);
  console.log(bookState.books);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: new Date().getTime().toString(),
      name: bookName,
    };
    dispatch({ type: "ADD", payload: newBook });
  };
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <div>
      <h1>Book List using useReducer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Book: </label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <>
            <li key={id}>{name}</li>
            <button onClick={() => handleRemove(id)}>delete</button>
          </>
        );
      })}
    </div>
  );
}

export default UseReducer;
