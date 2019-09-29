import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png"
import "./index.css"

function NavBar(){
    return(
        <nav>
            <div className="logo">
                <img alt="logo" src={logo}></img>
                <p>Allies</p>
            </div>
            <ul className="nav-items">
                <li>Features</li>
                <li>Product Guide</li>
                <li>Enterprise</li>
                <li>pricing</li>
            </ul>
            <ul className="nav-links">
                <Link to="/auth/register"><li>Try Free</li></Link>
                <li><span style={{borderRight: '2px solid black'}}></span></li>
                <Link to="/auth/login"><li>Login</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar;