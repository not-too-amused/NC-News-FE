import React, { Component } from 'react';
import './articleCard.css';
import axios from 'axios';

class ArticleCard extends Component {
  state = {
    article: {}
  }

  render() {
    const { article: { title, body, votes, author } } = this.state


    return (
      <div className="articleCard" >
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h2>{votes}</h2>
        <h3>{body}</h3>
      </div>
    );
  }



  componentDidMount = async () => {
    const article = await this.fetchArticleById();
    this.setState({ article })
  }

  fetchArticleById = async () => {
    const { article_id } = this.props
    const { data } = await axios.get(
      `https://rebbit-db.herokuapp.com/api/articles/${article_id}`
    )
    return data.articles;
  }

}

export default ArticleCard;


