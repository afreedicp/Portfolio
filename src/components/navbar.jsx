import React, { useState} from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";
import {Link} from "react-scroll"
function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-light bg-dark">
        {/* <i className="fab fa-affiliatetheme"></i> */}
        {/* <img src="img/zerglogo.png" /> */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="nav-link" to="/" smooth={true}duration={100}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Myself" smooth={true}duration={100}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Skills" smooth={true}duration={100}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Education" smooth={true}duration={100}>
              Education
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Contact" smooth={true}duration={100}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
