import React, { Component } from 'react';
import './ArticleCard.css';
import axios from 'axios';
import { navigate } from '@reach/router';

class ArticleCard extends Component {
  state = {
    article:
    {
      title: "",
      body: "",
      votes: 0,
      author: ""

    }
  }

  render() {
    const { article: { title, body, votes, author } } = this.state
    return (
      <div className="articleCard" >
        <h2>{title}</h2>
        <p className="articleInfo">by <span className="author">{author}</span>, voted {votes} overall</p>
        <hr className="comment_break"></hr>
        <p className="articleBody">{body}</p>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchArticleById().then(article => {
      this.setState({ article })
    }).catch(err => {
      navigate('/error', { replace: true })
    })

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


