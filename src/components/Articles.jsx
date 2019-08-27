import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Articles.css';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from '@reach/router';


class Articles extends Component {
  state = { articles: [], sort_by: 'created_at', order: 'desc' }

  render() {
    const { articles } = this.state;
    console.log(articles)
    return (
      <div>
        <select onChange={(event) => this.handleChange(event.target.value)} id="sort">

          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="comment_count">Comments</option>
        </select>
        <select onChange={(event) => this.handleOrder(event.target.value)} id="order">
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        <ul className="articles">
          {articles.map(article => {
            return (
              <li key={article.article_id} className="article">
                <Card className="articles_card">
                  <Card.Body className="card_parent">
                    <Card.Title className="article_title">{article.title}</Card.Title>
                    <Card.Text className="article_info">
                      Created by {article.author}<br></br><Moment format="LL">{article.created_at}</Moment>
                    </Card.Text>
                    <Link className="article_link" to={`${article.article_id}`} >See the full article here</Link>
                  </Card.Body>
                </Card>
              </li>
            )
          })}
        </ul>
      </div >
    )
  }


  componentDidMount = async () => {
    const articles = await this.fetchArticles();
    this.setState({ articles })
  }
  fetchArticles = async (sort) => {
    const { topic } = this.props
    // const { order } = this.state
    const { data } = await axios.get(
      'https://rebbit-db.herokuapp.com/api/articles', { params: { topic, sort_by: sort } }

    )
    return data.articles
  }

  handleChange = (sort) => {
    this.fetchArticles(sort).then(articles => this.setState({ articles }))
  }

  // handleOrder(order) {
  //   this.setState = { order: order }
  //   console.log(this.state)
  // }

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.sort_by !== prevState.sort_by) {
      const articles = await this.fetchArticles()
      this.setState({ articles })
    }
  }
}

export default Articles