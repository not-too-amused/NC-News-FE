import React, { Component } from "react";
import axios from 'axios';
import '../App.css'

class Comments extends Component {
  state = []

  render() {
    const comments = this.state
    // console.log('>>>>', comments, '<<<<')
    return (
      <ul className="comments">
        {/* {
          comments.map(comment => {
            return (
              <li key={comment.comment_id} className="comment">
                <h3>{comment.author}</h3>
                <h3>{comment.created_at}</h3>
                <h3>{comment.votes}</h3>
                <h4>{comment.body}</h4>
              </li>
            )
          })
        }} */}
      </ul>
    );
  }

  componentDidMount = async () => {
    const comments = await this.fetchCommentById();
    this.setState({ comments });
  }

  fetchCommentById = async () => {
    const { article_id } = this.props
    const data = await axios.get(
      `https://rebbit-db.herokuapp.com/api/articles/${article_id}/comments`
    )
    return data.data;
  }
}

export default Comments;