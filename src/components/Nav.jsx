import React from "react";
import nav from "./Nav.css"
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="HomeNav">
      <Link to={"/articles/all/12"}>
        <button>Serve me up something</button>
      </Link>
      <Link to="/articles/all">
        <button>Show me Everything!</button>
      </Link>
      <Link to="/">
        <button>Create a New Article</button>
      </Link>
    </nav>
  );



};

export default Nav;