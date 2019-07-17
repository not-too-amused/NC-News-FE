import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from 'axios'
import './Topics.css'

class Topics extends Component {
  state = {
    topics: []
  }
  render() {
    const { topics } = this.state;
    return (
      <ul className="topics" >
        <h2>hot topics</h2>
        {topics.map(topic => {
          return (
            <li key={topic.slug} className="topicstyle">
              <h2>{topic.slug}</h2>
              <Link to={`../articles/${topic.slug}`}>View Topic</Link>
            </li>
          );
        })
        }
        {/* <li key='coding' className='coding'>
          <h2>coding</h2>
          <Link to={'../articles/coding'}><img src='https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='screen with coding'></img></Link>
        </li>
        <li key='cooking'>
          <h2>cooking</h2>
          <Link to={'../articles/cooking'}><img src='https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='spoons and spices'></img></Link>
        </li>
        <li key='football'>
          <h2>football</h2>
          <Link to={'../articles/football'}><img src='https://images.pexels.com/photos/595229/pexels-photo-595229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='table football'></img></Link>
        </li> */}

      </ul>
    );

  }

  componentDidMount = async () => {
    const topics = await this.fetchTopics();
    console.log(topics, 'mounting!!')
    this.setState(topics);
  };

  fetchTopics = async () => {
    const { data } = await axios.get(
      'https://rebbit-db.herokuapp.com/api/topics'
    );
    return data;
  };
};
export default Topics;