import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="content flex hours-contact">
          <div className="hours">
            <div>OPENING HOURS</div>
            <div>Mon - Fri: 11am - 8pm</div>
            <div>Saturday: 9am - 6pm</div>
            <div>Sunday: Closed</div>
          </div>
          <div className="contact-wrapper">
            <div className="contact">
              <div>CONTACT</div>
              <div>1258 N Milwaukee Ave</div>
              <div>Chicago, 60622</div>
              <div>groomingloungechicago@gmail.com</div>
              <div>773-342-1258</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
