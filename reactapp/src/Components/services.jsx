import React from "react";
import { Link, withRouter } from "react-router-dom";

function Services(props) {
  return (
    <div>
  <section id="services" className="services">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="icon-box">
            <i className="bi bi-book-fill" />
            <h4><a href="#">Consultancy</a></h4>
            <p>We can guide you through the complex technical jungle, providing a clear path to your goals. Our consultants have bought many a difficult project to a successful close. If your desire is just for some short- term hand holding whilst using an unknown technology or a specification covering the complete design, we're here to help. We can provide both on-site mentoring and training to your staff. Should you at any time feel that the problem domain is too complex for your staff to address, we can easily take over and continue to provide a solution within the required time frame. </p>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="bi bi-code" />
            <h4><a href="#">Development</a></h4>
            <p>System Intelligence has catered for both on-premise and cloud-based solutions. Focusing on the development of robust, responsive and scalable solutions. As such, we are ideally placed to analyse complex business environments and provide the optimal solution for you and your organisation. We specialise in the provision of Microsoft services, and therefore can implement leading technologies in the development process.</p>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="bi bi-people-fill" />
            <h4><a href="#">Recruitment</a></h4>
            <p>System Intelligence is founded on technical excellence. It therefore expects the same of those personnel that it contracts out, or places in permanent employment. We can source staff for either one off requirements or to manage the complete development cycle for you. We have experience of both small and large scale projects. We specialise in finding staff with the right skills and the correct professional attitude. Working in a technical environment requires a number of people management skills, an all-round ability to work both independently and in a team, as well as technical acumen. These are all attributes which we require of our employees. </p>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="bi bi-gear-wide-connected" />
            <h4><a href="#">System Integration</a></h4>
            <p>Microsoft provides a number of excellent solutions to enterprise integration. Technologies such as BizTalk, Service Bus and the .Net framework are excellent tools that can be used to resolve a variety of integration and business workflow automation issues.
              We have been using BizTalk for over 8 years, the .Net framework since version 1.0 and Azure cloud-based solutions for several years. So, we’re more than accustom to leading-edge tools and can provide these to you in the most cost-effective manner.
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="bi bi-cloud-check-fill" />
            <h4><a href="#">Cloud</a></h4>
            <p>We predominantly work closely with Azure technologies. However, a greater proportion of our CI/CD is beginning to take advantage of Kubernetes and Docker as a means of providing auto scale, self-healing and resilience in a more cloud agnostic fashion.
              Serverless computing is still very much tied to each of the various cloud offerings such as Azure offering Service Fabric, Logic Apps, Function Apps and Batch. These are being used as discrete functional entities and are loosely coupled to the design should the pricing in AWS, Google Cloud Platform, or IBM Cloud offer a more competitive pricing structure. So, a cloud mesh is the preferred option basing architectural decisions with security, resilience and pricing at the heart of the design.
              With the advent of the cloud more and more of our solutions center around Domain Driven Design (DDD) as well as using Event Driven architecture to break the solution into functional units along the microservices pattern. This has also meant that we've looked at both event sourcing as well as Command Query Responsibility Segregation (CQRS) to increase throughput.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</div>


  );
}

export default withRouter(Services);