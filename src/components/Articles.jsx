import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './Articles.css';
import axios from 'axios';
import Moment from 'react-moment';


class Articles extends Component {
  state = { articles: [], props: {} }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <select id="sort">
          {/* onChange=""> */}
          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="comment_count">Comments</option>
        </select>
        <select id="order">
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
                      <p>{article.author}, <Moment format="LL">{article.created_at}</Moment></p>
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
    this.setState({ articles })
    // console.log(articles)
  }
  //topic, sort, order
  fetchArticles = async () => {
    console.log(this.props, 'props')
    const { topic } = this.props
    const { sort_by } = document.getElementById("sort").value;
    const { order } = document.getElementById("order").value;
    console.log(sort_by, '<<sortby', order, '<<<order')
    const { data } = await axios.get(
      'https://rebbit-db.herokuapp.com/api/articles', { params: { topic, sort_by } }

    )
    return data.articles
  }
  updateSort = (sort_by) => {
    this.setState({ sort_by })
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.sort_by !== prevState.sort_by) {     //*check if state is different to previous state
      const articles = await this.fetchArticles() //*call function and assign to variable
      this.setState({ articles })                 //*setState to the result assigned to the var
    }
  }
}

export default Articles