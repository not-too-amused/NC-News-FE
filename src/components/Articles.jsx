import React from 'react';
import { Link } from '@reach/router'
import './Articles.css';

const Articles = (props) => {
  const { articles } = props;
  return (
    <ul className="articles">
      {articles.map(article => {
        return (
          <li key={article.article_id} className="article">
            <h3>{article.title}</h3>
            <Link to={`${article.article_id}`}>See the full article</Link>
          </li>
        )
      })}
    </ul>
  )
}


export default Articles