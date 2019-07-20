import React from 'react';
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

const App = () => {
  return (
    <div className="App">
      <Header className="Header" />
      <NavBar className="Nav" path="/" />
      <Router className="Main">
        <Topics path="/" />
        <Articles path="/articles/all/" />
        <Articles path="/articles/:topic" />
        <ArticleCard path="/articles/:topic/:article_id" />
      </Router>
      <Router className="Bottom">
        <Comments className="Comments" path="/articles/:topic/:article_id" />
        <Footer path="/" className="Footer" />
      </Router>
    </div>
  );

}
export default App;
