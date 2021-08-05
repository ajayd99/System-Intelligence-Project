import React from "react";
import { Link, withRouter } from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email:'', phone:'', subject:'', message:''};
  }

  handleNameChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  handleEmailChange = (event) => {
    this.setState({[event.target.email]: event.target.value});
  }
  handlePhoneChange = (event) => {
    this.setState({[event.target.phone]: event.target.value});
  }
  handleSubjectChange = (event) => {
    this.setState({[event.target.subject]: event.target.value});
  }
  handleMessageChange = (event) => {
    this.setState({[event.target.message]: event.target.value});
  }


  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);

    fetch('https://sil-web-cosmosdb-fa.azurewebsites.net/api/enquiry-post?', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
}

render(){
  return (

    <div>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
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
            <li>Contact</li>
          </ol>
        </div>
      </div>
   </section>

  <section id="contact" className="contact">
    <div className="container">
      <div>
      <iframe style={{"border":"0","width":"100%","height":"270px"}} src="https://www.google.com/maps/embed/v1/place?q=4,+lawns+park,+north+woodchester,+gl55pp&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"frameBorder={0} allowFullScreen />
      </div>

      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>4, Lawns Park, North Woodchester, Stroud, GL55PP</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>Enquiry@sysint.biz</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <p>01453873530</p>
            </div>
          </div>
        </div>

      <div className="col-lg-8 mt-5 mt-lg-0">
        <form action={this.handleSubmit} method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" value={this.state.name.value} name="name" onChange={this.handleNameChange} className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" value={this.state.email.value} name="email" onChange={this.handleEmailChange} className="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="number" value={this.state.phone.value} name="phone" onChange={this.handlePhoneChange} className="form-control" id="phone" placeholder="Your Telephone Number" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <select name="subject" onChange={this.handleSubjectChange} className="form-control" id="subject" required >
                <option value={this.state.subject.value} selected disabled hidden>
                  Select a Subject
               </option>
                <option value="volvo">Consultancy</option>
                <option value="saab">Development</option>
                <option value="saab">Recruitment</option>
                <option value="saab">System Integration</option>
                <option value="saab">Cloud</option>
              </select>  
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea value={this.state.message.value} name="message" rows={5} placeholder="Message" onChange={this.handleMessageChange} className="form-control" id="message" defaultValue={""} required />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Enquiry</button></div>
        </form>
      </div>
      </div>
      </div>
    </section>
    </div>

  );
  }

}

export default withRouter(Contact);
