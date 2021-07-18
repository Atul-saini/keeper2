import React from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <header>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <h1>Keep It Short</h1>
          </div>
          <ul rows="3" className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">
                <h2>Home</h2>
              </Link>
            </li>
            <li id="about">
              <Link to="/About">
                <h2>About us</h2>
              </Link>
            </li>
            <li id="contact">
              <Link to="/contact">
                <h2>Contact</h2>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
