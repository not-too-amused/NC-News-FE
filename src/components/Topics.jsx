import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from 'axios'
import './Topics.css'
import codingimg from '../images/coding.jpeg'
import cookingimg from '../images/cooking.jpeg'
import footballimg from '../images/football.jpeg'

class Topics extends Component {
  state = {
    topics: []
  }
  render() {
    const { topics } = this.state;
    return (
      <ul className="topics" >
        <div className="container">
          <li className="topicElement" key='coding' >
            <Link to={'../articles/coding'}><img src={codingimg} alt='screen with coding'></img></Link>
          </li>
          <div class="textoverlay"><h2>coding</h2></div>
        </div>
        <div className="container">
          <li key='cooking'>
            <Link to={'../articles/cooking'}><img src={cookingimg} alt=' ceramic spoons with spices'></img></Link>
          </li>
          <div class="textoverlay"><h2>cooking</h2></div>
        </div>
        <div className="container">
          <li key='football'>
            <Link to={'../articles/football'}><img src={footballimg} alt='table football'></img></Link>
          </li>
          <div class="textoverlay"><h2>football</h2></div>
        </div>
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