// import React, { Component } from 'react';
import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Topics from "./components/Topics"
import Footer from "./components/Footer.js";
import { Router } from "@reach/router";
// import axios from "axios";

class App extends Component {
  state = {}

  render() {

    return (
      <div className="App">
        <Header className="Header" />
        <Nav className="Nav" />
        <Router>
          <Main path="/" />
          <Topics path="/topics" />
        </Router>
        <Footer className="Footer" />
      </div>
    );
  }

}

export default App;
