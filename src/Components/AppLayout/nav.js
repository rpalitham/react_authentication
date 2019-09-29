import React from "react";
import Logout from "./logout"
import "./nav.css";

function Nav(props) {

  return (
    <nav className="app-layout-nav">
      <div className="icons-container">
        <i className="fa fa-bell-o" aria-hidden="true"></i>
        <Logout {...props}/>
      </div>
    </nav>
  );
}

export default Nav;
