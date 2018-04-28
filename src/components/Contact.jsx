import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="content con-padded flex hours-contact">
          <div>
            <div>OPENING HOURS</div>
            <div>Mon - Fri: 11am - 8pm</div>
            <div>Saturday: 9am - 7pm</div>
            <div>Sunday: Closed</div>
          </div>
          <div>
            <div>CONTACT ME</div>
            <div>1258 N Milwaukee Ave</div>
            <div>Chicago, 60622</div>
            <div>groomingloungechicago@gmail.com</div>
            <div>773-342-1258</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
