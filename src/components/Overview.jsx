import React, { Component } from 'react';

// import oldSchoolBarber from '../images/nick-karvounis-156112-unsplash.jpg';
import about from '../images/about.jpg';

class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <div className="content con-padded flex col center-center">
          <div className="circle-image">
            <img src={about} />
          </div>
          <div className="summary-text">
            Grooming Lounge is an upscale, new-world barber shop that offers today’s progressive individual a haven where they can sit back, relax, and experience the world class art of grooming and services in a therapeutic club atmosphere. We carry a full line of hair care and shaving cream products including those from high-end brands, as well as select soaps and beard products. Our goal is to become a trusted destination where the clients in our community can come to refresh their minds and bodies, replenish their energies, and network with colleagues and friends.
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
