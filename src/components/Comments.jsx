import React, { Component } from "react";
import axios from 'axios';
import '../App.css'

class Comments extends Component {
  state = []

  render() {
    const comments = this.state
    console.log('>>>>', comments, '<<<<')
    return (
      <ul className="comments">
        {
          comments.map(comment => {
            console.log(comment, '<<-- each comment in map')
            return (
              <li key={comment.comment_id} className="comment">
                <h3>{comment.author}</h3>
                <h3>{comment.created_at}</h3>
                <h3>{comment.votes}</h3>
                <h4>{comment.body}</h4>
              </li>
            )
          })
        }}
      </ul>
    );
  }

  componentDidMount = async () => {
    const comments = await this.fetchCommentById();
    console.log('mounting & setting state of ', comments)
    this.setState({ comments });
  }

  fetchCommentById = async () => {
    const { article_id } = this.props
    const data = await axios.get(
      `https://rebbit-db.herokuapp.com/api/articles/${article_id}/comments`
    )
    console.log(data, '<<<< from axios')
    return data.data;
  }
}

export default Comments;