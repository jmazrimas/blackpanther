import React, { Component } from 'react';
import glWhite from '../images/GL_white.png';

class Announcement extends Component {
  render() {
    return (
      <div className="flex center-center announcement">
        <div className="flex flex col">
          <div>
            It's with heavy sadness that, due to the COVID-19 mandatory shutdown of non-essential businesses, our shop will be closed until April 7.
          </div>
          <div>
            We look forward to providing you with great services soon!​
          </div>
          <div>
            Our stylists and barbers are the heart and soul of our shop. We know that this will be a burden to their well-being and​ livelihood, so we have created a GoFundMe campaign to help support our amazing team during this difficult time.​
          </div>
          <div className="link-wrapper">
            <a href='https://www.gofundme.com/f/grooming-lounge-chicago-support-fund'><span>Click to Support Your Stylists and Barbers</span></a>
          </div>
          <div>
            Any contribution that you can spare is appreciated and will help ease the stress of this unprecedented time.​
          </div>
          <div>
            Be safe. Be healthy. And thank you for your social sharing!
          </div>
        </div>
      </div>
    );
  }
}

export default Announcement;
