import React from "react";
import { Link, withRouter } from "react-router-dom";

function Footer(props) {
  return (

    <footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-info">
            <h3>System Intelligence Ltd.</h3>
            <p>
              4, Lawns Park, <br/> Stroud, Gloucestershire, <br/> GL5 5PP <br/>
              <strong>Phone:</strong> 01453 873530<br />
              <strong>Email:</strong> enquiry@sysint.biz<br />

            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
          <li className="bx bx-chevron-right"
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link to="/">Home</Link>
          </li>
          <li className="bx bx-chevron-right"
                className={`nav-item  ${
                  props.location.pathname === "/About" ? "active" : ""
                }`}
              >
                <Link to="/About">About</Link>
          </li>
          <li className="bx bx-chevron-right"
                className={`nav-item  ${
                  props.location.pathname === "/Services" ? "active" : ""
                }`}
              >
                <Link to="/Services">Services</Link>
          </li>
          <li className="bx bx-chevron-right"
                className={`nav-item  ${
                  props.location.pathname === "/Home" ? "active" : ""
                }`}
              >
                <Link to="/Home">Home</Link>
          </li>
          <li className="bx bx-chevron-right"
                className={`nav-item  ${
                  props.location.pathname === "/Home" ? "active" : ""
                }`}
              >
                <Link to="/Home">Home</Link>
          </li>
          <li className="bx bx-chevron-right"
                className={`nav-item  ${
                  props.location.pathname === "/Home" ? "active" : ""
                }`}
              >
                <Link to="/Home">Home</Link>
          </li>
            
            <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
            
            <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right" /> Consultancy</li>
            <li><i className="bx bx-chevron-right" /> Development</li>
            <li><i className="bx bx-chevron-right" /> Recruitment</li>
            <li><i className="bx bx-chevron-right" /> System Integration</li>
            <li><i className="bx bx-chevron-right" /> Cloud</li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      © Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>

    );
}

export default withRouter(Footer);