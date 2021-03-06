import React, { Component } from 'react';

class PackagedService extends Component {
  render() {
    const { service } = this.props;
    return (
      <div className={`packaged-service ${!service.image ? 'blank' : ''}`}>
        <div className="service-image">
          <img src={service.image} />
        </div>
        <div className="name-price">
          <div>{service.name}</div>
          <div>{service.price}</div>
        </div>
        {
          service.descriptions.map(d => <div className="des-line">{d}</div>)
        }
        {
          service.includes && service.includes.length > 0 ?
          <div className="includes">
            <div>Includes</div>
            { service.includes &&
              service.includes.map(d => <div>{d}</div>)
            }
          </div> :
          <div />
        }
      </div>
    );
  }
}

export default PackagedService;
