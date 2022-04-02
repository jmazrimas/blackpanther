import React, { Component } from 'react';
import BasicService from './services/BasicService';

const serviceList = [
  {
    name: "HAIRCUTS",
    price: "$42/$47",
  },
  {
    name: "PARAFFIN HAND TREATMENT",
    price: "$15",
  },
  {
    name: "BUZZ CUT",
    price: "$25",
  },
  {
    name: "BROW WAXING",
    price: "$25",
  },
  {
    name: "STRAIGHT RAZOR SPA SHAVE",
    price: "$60",
  },
  {
    name: "NECK WAXING",
    price: "$25",
  },
  {
    name: "URBAN SHAVE (CHEEKS AND NECK)",
    price: "$35",
  },
  {
    name: "EARS AND NOSE WAXING",
    price: "$20",
  },
  {
    name: "MOUSTACHE AND BEARD TRIM",
    price: "$35",
  },
  {
    name: "CHEST AND BACK WAXING",
    price: "$65",
  },
  {
    name: "HAIR AND SCALP TREATMENT",
    price: "$25",
  },
  {
    name: "CHEST TRIM",
    price: "$25+",
  },
  {
    name: "COLOR BLENDING AND FULL COVERAGE",
    price: "$45+",
  },
  {
    name: "DETOX FACIAL",
    price: "$55",
  },
]

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="content con-padded flex col">
          <div className="section-title">Services</div>
          <div className="service-list">
            {
              serviceList.map(s => (
                <BasicService service={s} />
              ))
            }
          </div>
          <div className="cash-only">Cash Only</div>
        </div>
      </div>
    );
  }
}

export default Services;
