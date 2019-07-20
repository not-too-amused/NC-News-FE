import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Topics from "./components/Topics"
import Articles from "./components/Articles"
import ArticleCard from "./components/ArticleCard"
import Comments from "./components/Comments"
import Footer from "./components/Footer.jsx";
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
        <NavBar className="Nav" path="/" />
        <Router className="Main">
          <Topics path="/" />
          <Articles path="/articles/all/" articles={this.state.articles} />
          <Articles path="/articles/:topic" articles={this.state.artciles} />
          <ArticleCard path="/articles/:topic/:article_id" />
        </Router>
        <Router className="Bottom">
          <Comments className="Comments" path="/articles/:topic/:article_id" />
          <Footer path="/" className="Footer" />
        </Router>
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
