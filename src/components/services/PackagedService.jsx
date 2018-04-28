import React, { Component } from 'react';

class PackagedService extends Component {
  render() {
    const { service } = this.props;
    return (
      <div className="packaged-service">
        <div>{service.name}</div>
        <div>{service.price}</div>
      </div>
    );
  }
}

export default PackagedService;
