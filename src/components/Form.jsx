import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = {
    username: 'Guest',
    body: "Have your say.."
  }

  render() {
    return (
      <form className="addComment" onSubmit={this.handleSubmit}>
        <input type="text" name="newComment" onChange={this.handleInput} value={this.state.newComment} placeholder='Have your say...'
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  handleInput = input => {
    this.setState({
      username: 'Guest',
      body: input.target
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { article_id } = this.props;
    const newComment = this.state;
    this.submitComment(newComment)
  }

  submitComment = async (article_id, newComment) => {
    const { data } = await axios.post(
      `https://rebbit-db.herokuapp.com/api/articles/12/comments`, newComment
    )
    return data.comment
  }
}

export default Form;
