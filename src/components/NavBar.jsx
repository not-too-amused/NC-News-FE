import React from "react";
import Nav from 'react-bootstrap/Nav'
import { RandomArticle } from '../utils'
import "../App.css"
import "./NavBar.css"

const NavBar = () => {
  return (
    <Nav className="Navbar">
      <Nav.Item >
        <Nav.Link href={RandomArticle()}>Serve Me Up Something</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link href="/articles/all">Show Me Everything</Nav.Link>
      </Nav.Item>
    </Nav >
  );
};

export default NavBar;