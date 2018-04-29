import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="app-header flex center-center">
        <div className="content flex col center-center">
          <div className="main-title">
            Grooming Lounge
          </div>
          <div className="sub-title">Chicago</div>
        </div>
      </div>
    );
  }
}

export default Header;
