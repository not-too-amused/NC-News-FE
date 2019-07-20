import React from "react";
import Nav from 'react-bootstrap/Nav'
import "../App.css"

const NavBar = () => {
  return (
    <nav>
      <Nav.Item>
        <Nav.Link href="/articles/all/12">Serve Me Up Something</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/articles/all">Show Me Everything</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Create A New Article</Nav.Link>
      </Nav.Item>
    </nav>
  );



};

export default NavBar;