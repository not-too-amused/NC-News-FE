import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = {
    username: 'jessjelly',
    body: ""
  }

  render() {
    return (
      <form className="addComment" onSubmit={this.handleSubmit}>
        <input type="text" name="newComment" onChange={this.handleInput} value={this.state.body} placeholder='Have your say...'
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  handleInput = input => {
    this.setState({
      username: 'jessjelly',
      body: input.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { article_id } = this.props;
    console.log('\u001b[1m\u001b[7m console log \u001b[0m', article_id)

    const newComment = this.state;
    this.submitComment(article_id, newComment)
  }

  submitComment = async (article_id, newComment) => {
    console.log(article_id)
    const { data } = await axios.post(
      `https://rebbit-db.herokuapp.com/api/articles/${article_id}/comments`, newComment
    )
    return data.comment
  }
}

export default Form;
