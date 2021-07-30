import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../SIL-logo.PNG';
import home from '../components/Home.jsx';
import services from '../components/Services.jsx';
import about from '../components/About.jsx';
import contact from '../components/Contact.jsx';


function Header(props) {
  return (

     <div className="navigation">  
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <div class="container">
            <Link class="navbar-brand" to="/">
              System Intelligence Ltd.
            </Link>

            <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/services">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        
          </div>
        </nav>  
      </div>  

    );
}  

export default withRouter(Header);