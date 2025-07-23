import PropTypes from "prop-types";

const BookCover = ({ backgroundImageURL }) => {
  const hasBackground = backgroundImageURL !== undefined;

  return (
    <div>
      {hasBackground ? (
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${backgroundImageURL}}")`,
          }}
        ></div>
      ) : (
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
          }}
        >
          I'm missing my book cover!
        </div>
      )}
    </div>
  );
};

BookCover.propTypes = {
  backgroundImageURL: PropTypes.string,
};

export default BookCover;
