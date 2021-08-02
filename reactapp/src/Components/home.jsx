import React from "react";
import { Link, withRouter } from "react-router-dom";
//import { carousel } from "../../bootstrap/js/bootstrap.bundle";
import Carousel from 'react-bootstrap/Carousel';
//import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../slide/slide-1.jpg'
import image2 from '../slide/slide-2.jpg'
import image3 from '../slide/slide-3.jpg'

function Home(props) {
  return (
    <div>
      <div className='container-fluid' >
        <div className="row">
        <div className="col-sm-12">
        </div>
        </div>
        <div className="row">
        <div className="col-12">
        <Carousel>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src= {image1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>Recruitment</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
        className="d-block w-100"
        src= {image2}
        alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Consultancy</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
        className="d-block w-100"
        src= {image3}
        alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Development</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
        </div>
      </div>


  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container">
        <div className="row content">
          <div className="col-lg-6">
            <h2>Eum ipsam laborum deleniti velitena</h2>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
              <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
            </ul>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>{/* End About Section */}
  </main>
    </div>

    );
}  

export default withRouter(Home);