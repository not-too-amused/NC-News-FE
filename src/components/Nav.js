import React from "react";
import nav from "../App.css"
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
      <div><input type="text" placeholder="Search.." /></div>
    </nav>
  );
};

export default Nav;