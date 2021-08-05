import React from "react";
import { Link, withRouter } from "react-router-dom";
//import { carousel } from "../../bootstrap/js/bootstrap.bundle";
//import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../slide/slide-1.jpg'
import image2 from '../slide/slide-2.jpg'
import image3 from '../slide/slide-3.jpg'

function Home(props) {
  return (
    <div>
     
     <section id="hero">
    
     <div id="heroCarousel" className="carousel slide carousel-fade">"
     <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

     <div className="carousel-inner" role="listbox">
     <div className='container-fluid' >
        <div className="row">
        <div className="col-sm-12">
        </div>
        </div>
        <div className="row">
        <div className="col-12">
       
        <Carousel>
          <Carousel.Item >
         
          <img
          className="d-block w-100"
          src= {image1}
          alt="First slide"
          />
           <div className="carousel-container">
            <div className="container">
              <Carousel.Caption>
              <h2 className="animate__animated animate__fadeInDown">Welcome to <span>System Intelligence</span></h2>
              <p className="animate__animated animate__fadeInUp">Providing the very best in business solutions using leading edge technology.</p>
              <ul>
              <li
                 className={`nav-item  ${
                  props.location.pathname === "/About" ? "active" : ""
                  }`}
                  >
                  <Link className="btn-get-started animate__animated animate__fadeInUp scrollto" to="/About">
                     Read more 
                  </Link>
                </li>
                </ul>
                </Carousel.Caption>
            </div>
            </div>
          </Carousel.Item>
    
          <Carousel.Item>
          <img
          className="d-block w-100"
          src= {image2}
          alt="Second slide"
          />
             <div className="carousel-container">
            <div className="container">
          
              <Carousel.Caption>
              <h2 className="animate__animated animate__fadeInDown"><span>Recruitment</span></h2>
              <p className="animate__animated animate__fadeInUp">We can source staff for a variety of business needs.</p>
              <ul>
              <li
                 className={`nav-item  ${
                  props.location.pathname === "/About" ? "active" : ""
                  }`}
                  >
                  <Link className="btn-get-started animate__animated animate__fadeInUp scrollto" to="/About">
                    Read more
                  </Link>
                </li>
                </ul>
                </Carousel.Caption>
            </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
          <img
          className="d-block w-100"
          src= {image3}
          alt="Third slide"
          />

            <div className="carousel-container">
            <div className="container">
         
              <Carousel.Caption>
              <h2 className="animate__animated animate__fadeInDown"><span>Development</span></h2>
              <p className="animate__animated animate__fadeInUp">System Intelligence can provide robust, responsive and scalable applications for a range of different use cases.</p>
              <ul>
              <li
                 className={`nav-item  ${
                  props.location.pathname === "/About" ? "active" : ""
                  }`}
                  >
                  <Link className="btn-get-started animate__animated animate__fadeInUp scrollto" to="/About">
                    Read more 
                  </Link>
                </li>
                </ul>
                </Carousel.Caption> 
            </div>
            </div>
          </Carousel.Item>
        </Carousel>
        </div>
        </div>
        
        {/** 
        <Link className="carousel-control-prev" to= "#herocarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
        </Link>

        <Link className="carousel-control-next" to= "#herocarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
        </Link>
        **/}

      </div>
      </div>
      </div>
      </section>

      <main id="main"> 
      <br></br>
      <br></br>        
      </main>

  </div>


    );
}  

export default withRouter(Home);