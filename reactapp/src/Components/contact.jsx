import React from "react";
import { Link, withRouter } from "react-router-dom";

function Contact(props) {
  return (
    <section id="contact" className="contact">
      <div className="col-lg-8 mt-5 mt-lg-0">
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="number" className="form-control" name="phone" id="phone" placeholder="Your Telephone Number" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <select className="form-control" name="subject" id="subject" required>
                <option value="none" selected disabled hidden>
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
            <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Enquiry</button></div>
        </form>
      </div>
    </section>

  );

}

export default withRouter(Contact);