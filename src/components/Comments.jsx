import React, { Component } from "react";
import axios from 'axios';
import '../App.css'
import './Comments.css'
import { Accordion, Card } from 'react-bootstrap'
import Form from './Form'
import Moment from 'react-moment'

class Comments extends Component {
  state = {
    comments: []
  }

  render() {
    const { comments } = this.state
    const { article_id } = this.props

    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle className="commentToggle" as={Card.Header} eventKey="1">
              Click to see the comments
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" >
              <Card.Body>
                <ul className="comments">
                  {
                    comments.map(comment => {
                      return (
                        <li key={comment.comment_id} className="comment">
                          <p className="created_at"><span className="author">{comment.author} </span><Moment format="LL">{comment.created_at}</Moment></p>
                          <p className="comment_body">{comment.body}</p>
                          <p className="votes">{comment.votes} people like this comment overall</p>
                          <div className="thumbs" ><i className="fa fa-thumbs-up"></i> <i className="fa fa-thumbs-down"></i></div>
                          <hr className="comment_break"></hr>
                        </li>
                      )
                    })
                  }
                </ul>
                <Form article_id={article_id} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div >
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