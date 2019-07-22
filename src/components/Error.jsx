import React from 'react';
import error404 from '../images/error404.jpg'
import { Link } from '@reach/router'

const Errors = () => {
  return (
    <nav className="error" >
      <Link to={'./'}><img src={error404} alt='screen with coding'></img></Link>
    </nav>
  )
}

export default Errors;
