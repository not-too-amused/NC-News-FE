// import React, { Component } from 'react';
import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Topics from "./components/Topics"
import Articles from "./components/Articles"
import Footer from "./components/Footer.js";
import { Router } from "@reach/router";
import axios from 'axios';

class App extends Component {
  state = {
    articles: []
  }

  render() {
    return (
      <div className="App">
        <Header className="Header" />
        <Nav className="Nav" />
        <Router>
          <Main path="/" />
          <Topics path="/topics" />
          <Articles path="/articles" articles={this.state.articles} />
        </Router>
        <Footer className="Footer" />
      </div>
    );
  }
  componentDidMount = async () => {
    const articles = await this.fetchArticles();
    this.setState({ articles })
  }
  fetchArticles = async () => {
    const { data } = await axios.get(
      'https://rebbit-db.herokuapp.com/api/articles'
    )
    return data.articles
  }
}


export default App;
