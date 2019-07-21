import React from "react";
import './Footer.css'
import GitHublogo from '../images/GitHublogo.png'

const Footer = () => {
  return <footer className="Footer"><a href="https://github.com/not-too-amused">You can view the source code for this project on my GitHub <img className="gitLogo" src={GitHublogo} alt="GitHub logo"></img></a ></footer >
}

export default Footer