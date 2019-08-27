import React from "react";
import { Link } from "@reach/router";
import './Topics.css'
import codingimg from '../images/coding.jpeg'
import cookingimg from '../images/cooking.jpeg'
import footballimg from '../images/football.jpeg'

const Topics = () => {
  return (
    <ul className="topics" >
      <div className="container">
        <li className="topicElement" key='coding' >
          <Link to={'../articles/coding'}><img src={codingimg} alt='screen with coding'></img></Link>
        </li>
        <div className="textoverlay"><h2>coding</h2></div>
      </div>
      <div className="container">
        <li key='cooking'>
          <Link to={'../articles/cooking'}><img src={cookingimg} alt=' ceramic spoons with spices'></img></Link>
        </li>
        <div className="textoverlay"><h2>cooking</h2></div>
      </div>
      <div className="container">
        <li key='football'>
          <Link to={'../articles/football'}><img src={footballimg} alt='table football'></img></Link>
        </li>
        <div className="textoverlay"><h2>football</h2></div>
      </div>
    </ul>
  );
}
export default Topics;