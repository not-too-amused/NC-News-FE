import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";
import HomeNav from "./components/Nav.js";
import QueryNav from "./components/Nav.js";
import Topics from "./components/Topics"
import Articles from "./components/Articles"
import ArticleCard from "./components/ArticleCard"
import Footer from "./components/Footer.js";
import { Router } from "@reach/router";
import axios from 'axios';

class App extends Component {
  state = {
    articles: [],
    search: '?topic=cooking'
  }

  render() {
    return (
      <div className="App">
        <Header className="Header" />
        <Router className="Nav" >
          <HomeNav path="/" />
          <QueryNav path="/*" />
        </Router>
        <Router className="Main">
          <Topics path="/" />
          <Articles path="/articles" articles={this.state.articles} />
          <Articles path="/articles/:topic" articles={this.state.artciles} />
          <ArticleCard path="/articles/:article_id" />
        </Router>
        <Footer path="/" className="Footer" />
      </div>
    );
  }
  // componentDidMount = async () => {
  //   const articles = await this.fetchArticles();
  //   this.setState({ articles })
  // }
  // fetchArticles = async (topic) => {
  //   const { data } = await axios.get(
  //     `https://rebbit-db.herokuapp.com/api/articles`
  //   )
  //   return data.articles
  // }
}
export default App;
