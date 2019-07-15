import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from 'axios'

class Topics extends Component {
  state = {
    topics: []
  }
  render() {
    const { topics } = this.state;
    console.log(topics, '<<<< DATA')
    return (
      <ul className="topicsstyle" >
        {topics.map(topic => {
          return (
            <li key={topic.slug} className="topicstyle">
              <h2>{topic.slug}</h2>
              <Link to={`${topic.slug}`}>View Topic</Link>

            </li>
          );
        })
        }
      </ul>
    );

  }

  componentDidMount = async () => {
    const topics = await this.fetchTopics();
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