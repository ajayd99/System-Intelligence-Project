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
              <strong>Phone:</strong> 01453 873530<br />
              <strong>Email:</strong> enquiry@sysint.biz<br />
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
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