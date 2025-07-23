import { Link } from "react-router-dom";

const OpenSearchButton = () => {
  return (
    <div className="open-search">
      <Link to="/search">Search</Link>
    </div>
  );
};

export default OpenSearchButton;
