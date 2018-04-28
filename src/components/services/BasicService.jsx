import React, { Component } from 'react';

class BasicService extends Component {
  render() {
    const { service } = this.props;
    return (
      <div className="service">
        <div>{service.name}</div>
        <div>{service.price}</div>
      </div>
    );
  }
}

export default BasicService;
