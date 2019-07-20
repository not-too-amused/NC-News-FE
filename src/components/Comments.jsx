import React, { Component } from "react";
import axios from 'axios';
import '../App.css'
import { Accordion, Card } from 'react-bootstrap'

class Comments extends Component {
  state = {
    comments: []
  }

  render() {
    const { comments } = this.state
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click to see the comments
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className="comments">
                  {
                    comments.map(comment => {
                      return (
                        <li key={comment.comment_id} className="comment">
                          <p className="created_at"><span className="author">{comment.author}</span>{comment.created_at}</p>
                          <p className="comment_body">{comment.body}</p>
                          <p className="votes">{comment.votes} people like this comment overall</p>
                        </li>
                      )
                    })
                  }
                </ul>
                <form action={''}>
                  <input type="text" name="newComment" value="Have your say.." />
                  <input type="submit" value="Submit" />
                </form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }

  // postComment = (newComment) => {
  //   this.setState({ newComment })
  // }

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

  commentDidUpdate = async (prevProps, prevState) => {
    if (this.state.newComment !== prevState.newComment) {
      const newComment = await this.postCommentById()
      this.setState({ newComment })
    }
  }
  // postCommentById = async () => {
  //   const
  // }


}

export default Comments;