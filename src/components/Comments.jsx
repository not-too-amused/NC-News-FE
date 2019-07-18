import React, { Component } from "react";
import axios from 'axios';
import '../App.css'

class Comments extends Component {
  state = {
    comments: []
  }

  render() {
    const { comments } = this.state
    console.log('>>>>', comments, '<<<<')
    return (
      <div>
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <a data-toggle="collapse" href="#comments">Click here to see the comments</a>
              </h3>
            </div>
            <div id="comments" className="panel-collapse collapse">
              <ul className="comments">
                {
                  comments.map(comment => {
                    return (
                      <li key={comment.comment_id} className="comment">
                        <h5><span>{comment.author}</span>, {comment.created_at}</h5>
                        <h4>{comment.body}</h4>
                        <p>{comment.votes} people like this comment</p>
                      </li>
                    )
                  })
                }}
              </ul>
              <form action="">
                <input type="text" name="newComment" value="Have your say.." />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>


      </div>
    );
  }

  postComment = (newComment) => {
    this.setState({ newComment })
  }




  componentDidMount = async () => {
    const comments = await this.fetchCommentById();
    this.setState({ comments });
  }

  fetchCommentById = async () => {
    const { article_id } = this.props
    const { data } = await axios.get(
      `https://rebbit-db.herokuapp.com/api/articles/${article_id}/comments`
    )
    console.log(data)
    return data;
  }



}

export default Comments;