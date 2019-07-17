import React, { Component } from 'react';
import { Link } from '@reach/router'
import './Articles.css';
import axios from 'axios'


class Articles extends Component {
  state = { articles: [], props: {} }

  render() {
    const { articles } = this.state;
    return (
      <ul className="articles">
        {articles.map(article => {
          return (
            <li key={article.article_id} className="article">
              <h2>{article.title}</h2>
              <h3>{article.author}, {article.created_at}</h3>
              <Link to={`${article.article_id}`}>See the full article</Link>
            </li>
          )
        })}
      </ul>
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
    const { data } = await axios.get(
      'https://rebbit-db.herokuapp.com/api/articles', { params: { topic } }

      // , {
      //   params: { topic }
      // }
    )
    console.log(data, '<<<<DATA')
    return data.articles
  }
}

export default Articles

// const Articles = (props) => {
//   console.log(props, 'without destructuring')
//   const { articles } = props;
//   return (
//     <ul className="articles">
//       {articles.map(article => {
//         return (
//           <li key={article.article_id} className="article">
//             <h3>{article.title}</h3>
//             <Link to={`${article.article_id}`}>See the full article</Link>
//           </li>
//         )
//       })}
//     </ul>
//   )



// }

// // }