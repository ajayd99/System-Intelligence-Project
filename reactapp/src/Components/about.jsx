import React from "react";
import { Link, withRouter } from "react-router-dom";

function About(props) {
  return (

  <div>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>About</h2>
          <ol>
            <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link to="/">
                  Home
                </Link>
              </li>
            <li>About</li>
          </ol>
        </div>
      </div>
   </section>
    
  <section id="about" className="about">
    <div className="container">
      <div className="row content">
        <div className="col-lg-6">
          <h2>Get to know the business</h2>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
          <p>
          System Intelligence was founded 26 years ago. Its aim is to provide the very best in business solutions using leading edge technology. 
          To this end it recieved accreditation as a Microsoft Partner and and has worked closely both with its consultants and partners. 
          Since it's inception, the company has diversified into a number of new and exciting sectors whilst still remaining true to it's original aspirations. 
          It now covers a number of related areas: Consultancy Recruitment IT Solutions (complete development cycle).
          The Directors of the company have nearly 30 years experience in the IT sector, providing actionable solutions and advice to a diverse range of companies including;
          </p>
          <ul>
            <li><i className="ri-check-double-line" /> Mitie</li>
            <li><i className="ri-check-double-line" /> Your Housing Group</li>
            <li><i className="ri-check-double-line" /> Vivista</li>
            <li><i className="ri-check-double-line" /> Leaseplan</li>
            <li><i className="ri-check-double-line" /> AssureSoft</li>
            <li><i className="ri-check-double-line" /> Nationwide</li>
            <li><i className="ri-check-double-line" /> Prudential</li>
            <li><i className="ri-check-double-line" /> Harrods</li>
            <li><i className="ri-check-double-line" /> Barclays Capitol</li>
            <li><i className="ri-check-double-line" /> BT</li>
    
          </ul>
          <p className="fst-italic">
            As with all of our previous and existing clients we aim to provide YOU with the 
            highest level of service possible to help accelerate growth and achieve optimal performance 
            in any given market sector through the use of industry leading technologies.
          </p>
        </div>
      </div>
    </div>
  </section>
 
</div>

  );
}

export default withRouter(About);