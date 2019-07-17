import React from "react";
import nav from "./Nav.css"
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/topics">
        <button>Browse by Topic</button>
      </Link>
      <Link to="/">
        <button>Create a New Article</button>
      </Link>
      <Link to="/articles">
        <button>Show me Everything!</button>
      </Link>
      <div><input type="text" placeholder="Search.." /></div>
    </nav>
  );
};

export default Nav;