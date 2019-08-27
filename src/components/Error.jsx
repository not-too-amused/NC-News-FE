import React from 'react';
import error404 from '../images/error404.jpg'
import { Link } from '@reach/router'
import "./Error.css"

const Errors = () => {
  return (
    <nav className="error" >
      <Link to={'./'}><img src={error404} alt='Lionel Ritchie thinks you may be lost'></img></Link>
    </nav>
  )
}

export default Errors;
