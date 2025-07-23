import PropTypes from "prop-types";
import BookCover from "./BookCover";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, updateBookshelf, myBooks }) => {
  const backgroundImageURL = book?.imageLinks?.thumbnail;
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <BookCover backgroundImageURL={backgroundImageURL} />
          <BookshelfChanger book={book} onUpdateBookshelf={updateBookshelf} myBooks={myBooks} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  updateBookshelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  myBooks: PropTypes.array.isRequired
};

export default Book;
