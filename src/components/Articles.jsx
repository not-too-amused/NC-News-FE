import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './Articles.css';
import axios from 'axios';
import Moment from 'react-moment';


class Articles extends Component {
  state = { articles: [], sort_by: 'created_at', order: 'desc' }

  render() {
    const { articles } = this.state;
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
                  {/* <Card.Img variant="right" src="placeholder" /> */}
                  <Card.Body>
                    <Card.Title className="article_title">{article.title}</Card.Title>
                    <Card.Text className="article_info">
                      Created by {article.author} on <Moment format="LL">{article.created_at}</Moment>
                    </Card.Text>
                    <Button className="article_link" variant="link" href={`${article.article_id}`} >See the full article here</Button>
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
    console.log({ articles })
    this.setState({ articles })
  }
  //topic, sort, order
  fetchArticles = async () => {
    const { topic } = this.props
    const { sort_by } = this.state
    const { order } = this.state
    const { data } = await axios.get(
      'https://rebbit-db.herokuapp.com/api/articles', { params: { topic, sort_by, order } }

    )
    return data.articles
  }
  handleChange(sort) {
    this.setState = { articles: [], sort_by: 'created_at', order: 'desc' }
    console.log(this.state)
  }
  handleOrder(order) {
    this.setState = { order: order }
    console.log(this.state)
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.sort_by !== prevState.sort_by || this.state.order !== prevState.order) {
      console.log('yes component DID update!')
      const articles = await this.fetchArticles()
      this.setState({ articles })
    }
  }
}

export default Articles