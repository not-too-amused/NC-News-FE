import React from "react";
import nav from "./Nav.css"
import { Link } from "@reach/router";

const HomeNav = () => {
  return (
    <nav className="HomeNav">
      <Link to="/articles/">
        <button>Serve me up something</button>
      </Link>
      <Link to="/articles">
        <button>Show me Everything!</button>
      </Link>
      <Link to="/">
        <button>Create a New Article</button>
      </Link>
      <select>
        <option value="created_at">Date</option>
        <option value="author">Author</option>
        <option value="comment_count">Comments</option>
      </select>
      <select>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <div><input type="text" placeholder="Search.." /></div>
    </nav>
  );
};

// const QueryNav = () => {
//   return (
//     <nav className="QueryNav">
//       <Link to="/articles/">
//         <button>Sort by</button>
//       </Link>
//       <Link to="/articles">
//         <button>Filter by</button>
//       </Link>
//       <Link to="/">
//         <button>Create a New Article</button>
//       </Link>
//       <div><input type="text" placeholder="Search.." /></div>
//     </nav>
//   );
// };

export default HomeNav;