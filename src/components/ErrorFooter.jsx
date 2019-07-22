import React from "react";
import { Link } from '@reach/router';
import './Footer.css'


const ErrorFooter = () => {
  return <footer className="ErrorFooter">
    <Link to={'/'}>You can click here to go back to the homepage</Link>
  </footer >
}

export default ErrorFooter