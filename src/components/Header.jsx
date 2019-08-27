import React from "react";
import { Link } from '@reach/router'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header" ><Link to={'/'}><span>nc</span>news</Link></h1>
      <OverlayTrigger placement='bottom' overlay={<Tooltip id="user">Currently logged in as jessjelly</Tooltip>}>
        <span className="d-inline-block">
          <i className="fa fa-user"></i>
        </span>
      </OverlayTrigger>
    </div>
  )
}


export default Header