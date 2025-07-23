import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ books, updateBookshelf, bookshelfTitle, myBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              updateBookshelf={updateBookshelf}
              myBooks={myBooks}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookshelf: PropTypes.func.isRequired,
  bookshelfTitle: PropTypes.string.isRequired,
  myBooks: PropTypes.array.isRequired,
};

export default Bookshelf;
