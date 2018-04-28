import React, { Component } from 'react';

class BasicService extends Component {
  render() {
    const { service } = this.props;
    return (
      <div className="basic-service flex">
        <div className="s-name">{service.name}</div>
        <div className="s-price">{service.price}</div>
      </div>
    );
  }
}

export default BasicService;
