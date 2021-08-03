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
      <br></br>
      <br></br>        
      </main>

    </div>


    );
}  

export default withRouter(Home);