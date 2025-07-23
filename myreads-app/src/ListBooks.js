import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";
import OpenSearchButton from "./OpenSearchButton";

const ListBooks = ({ books, updateBookshelf }) => {
  const currentlyReadingBooks = books.filter(
    (b) => b.shelf === "currentlyReading"
  );
  const wantToReadBooks = books.filter((b) => b.shelf === "wantToRead");
  const readBooks = books.filter((b) => b.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            books={currentlyReadingBooks}
            updateBookshelf={updateBookshelf}
            bookshelfTitle={"Currently Reading"}
            myBooks={books}
          />
          <Bookshelf
            books={wantToReadBooks}
            updateBookshelf={updateBookshelf}
            bookshelfTitle={"Want to Read"}
            myBooks={books}
          />
          <Bookshelf
            books={readBooks}
            updateBookshelf={updateBookshelf}
            bookshelfTitle={"Read"}
            myBooks={books}
          />
        </div>
      </div>
      <OpenSearchButton />
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookshelf: PropTypes.func.isRequired,
};

export default ListBooks;
