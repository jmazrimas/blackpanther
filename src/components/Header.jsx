import React, { Component } from 'react';
import glWhite from '../images/GL_white.png';

class Header extends Component {
  render() {
    return (
      <div className="app-header flex center-center">
        <div className="content flex col center-center">
          <div className="header-container">
            <img className="header-image" src={glWhite} />
          </div>
        </div>
      </div>
    );
  }
}

// <div className="main-title">
//   Grooming Lounge
// </div>
// <div className="sub-title">Chicago</div>

export default Header;
