import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../SIL-logo.PNG';
import home from '../components/Home.jsx';
import services from '../components/Services.jsx';
import about from '../components/About.jsx';
import contact from '../components/Contact.jsx';




function Header(props) {
  return (

    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><a href= {home} >System Intelligence Ltd.</a></h1>
        <a href="index.html" className="logo me-auto"><img src= {logo} alt className="img-fluid" /></a>
        
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href= {home} className="active">Home</a></li>
            <li className="dropdown"><a href= {services}><span>Services</span> <i className="bi bi-chevron-down" /></a>
              <ul>
                <li><a href="about.html">Consultancy</a></li>
                <li><a href="team.html">Development</a></li>
                <li><a href="testimonials.html">Recruitment</a></li>
                <li><a href="testimonials.html">System Integration</a></li>
                <li><a href="testimonials.html">Cloud</a></li>
              </ul>
            </li>
            <li><a href= {about}>About</a></li>
            <li><a href= {contact} className="getstarted">Contact Us</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        
      </div>
    </header>

    );
}  

export default withRouter(Header);