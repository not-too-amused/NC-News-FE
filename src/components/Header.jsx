import React from "react";
import { Link } from '@reach/router'
import "./Header.css"

const Header = () => {
  return (
    <h1 className="Header"><Link to={'/'}><span>nc</span>news</Link></h1>
  )
}


export default Header