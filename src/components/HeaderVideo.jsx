import React, { Component } from 'react';
import glWhite from '../images/GL_white.png';

class HeaderVideo extends Component {
  render() {
    return (
      <div className="app-header with-video flex center-center">
        <div className="content flex col center-center text-video z-top">
          <div className="header-container">
            <img className="header-image" src={glWhite} />
            <div className="sub-header">Meet your new favorite barbershop</div>
          </div>
        </div>
        <div className="header-video">
          <video id="background-video" loop muted autoPlay>
            <source src="https://s3.amazonaws.com/groominglounge-video/gl-video-short.mp4" type="video/mp4" />
            <source src="https://s3.amazonaws.com/groominglounge-video/gl-video-short.mp4" type="video/ogg" />
          </video>
        </div>
        <div className="video-cover" />
      </div>
    );
  }
}

// <div className="main-title">
//   Grooming Lounge
// </div>
// <div className="sub-title">Chicago</div>

export default HeaderVideo;
