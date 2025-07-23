import PropTypes from "prop-types";

const BookshelfChanger = ({ book, onUpdateBookshelf, myBooks }) => {
  const handleChange = (event) => {
    onUpdateBookshelf(book, event.target.value);
  };

  const shelfValue =
    myBooks?.filter((mb) => mb.id === book.id)?.map((mb) => mb.shelf)[0] ??
    "none";

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} defaultValue={shelfValue}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookshelfChanger.propTypes = {
  updateBookshelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  myBooks: PropTypes.array.isRequired
};

export default BookshelfChanger;
