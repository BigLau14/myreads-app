import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";

function App() {
  const [myBooks, setMyBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({});

  const updateBookshelf = (book, bookshelf) => {
    const updateBook = async () => {
      const res = await BooksAPI.update(book, bookshelf);
      const myBooksResults = res.currentlyReading.concat(
        res.wantToRead,
        res.read
      );

      setMyBooks(myBooksResults);
      setCurrentBook(book);
    };

    updateBook();
  };

  useEffect(() => {
    const getAll = async () => {
      const res = await BooksAPI.getAll();
      setMyBooks(res);
    };

    getAll();
  }, [currentBook]);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks books={myBooks} updateBookshelf={updateBookshelf} />
          }
        />
        <Route
          exact
          path="/search"
          element={
            <Search updateBookshelf={updateBookshelf} myBooks={myBooks} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
