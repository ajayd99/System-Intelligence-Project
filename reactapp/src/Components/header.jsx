import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  return (

     <div> 
      <header id="header" className="fixed-top d-flex align-items-center"> 
      <div className="container d-flex align-items-center">

      
        <nav id="navbar" className="navbar">
  
            <Link className="logo me-auto" to="/">
              <h1>System Intelligence Ltd. </h1>
            </Link>

            <ul className="navbar-nav ml-auto">
              <li 
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link  to="/">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link to="/services">
                  Services
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="contactus" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>

        </nav> 
        </div> 
        </header>
      </div>  

    );
}  

export default withRouter(Header);