import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";
import PropTypes from "prop-types";

const Search = ({ updateBookshelf, myBooks }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const updateQuery = (query) => {
    setQuery(query.trimStart());
  };

  useEffect(() => {
    const searchTimeoutId = setTimeout(() => {
      if (query?.length > 0) {
        const searchForBooks = async () => {
          const res = await BooksAPI.search(query, 20);
          setSearchResults(res);
        };
        searchForBooks();
      } else {
        setSearchResults([]);
      }
    }, 1000);

    return () => clearTimeout(searchTimeoutId);
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => {
              updateQuery(event.target.value);
            }}
          ></input>
        </div>
      </div>
      {searchResults?.length > 0 && (
        <Bookshelf
          books={searchResults}
          updateBookshelf={updateBookshelf}
          myBooks={myBooks}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  updateBookshelf: PropTypes.func.isRequired,
  myBooks: PropTypes.array.isRequired,
};

export default Search;
