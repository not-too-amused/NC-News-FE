import React, { Component } from 'react';

class Form extends Component {
  state = ""
  render() {
    return (



      <form action={''}>
        <input type="text" name="newComment" value="Have your say.." />
        <input type="submit" value="Submit" />
      </form>


    );
  }
}

export default Form;
