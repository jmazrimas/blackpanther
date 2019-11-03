import React, { Component } from 'react';
import BasicService from './services/BasicService';

const serviceList = [
  {
    name: "HAIRCUTS",
    price: "$32/$37",
  },
  {
    name: "PARAFFIN HAND TREATMENT",
    price: "$10",
  },
  {
    name: "BUZZ CUT",
    price: "$25",
  },
  {
    name: "BROW WAXING",
    price: "$20",
  },
  {
    name: "STRAIGHT RAZOR SPA SHAVE",
    price: "$45",
  },
  {
    name: "NECK WAXING",
    price: "$20",
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
    price: "$20",
  },
  {
    name: "CHEST AND BACK WAXING",
    price: "$45+",
  },
  {
    name: "HAIR AND SCALP TREATMENT",
    price: "$20",
  },
  {
    name: "CHEST TRIM",
    price: "$20+",
  },
  {
    name: "COLOR BLENDING AND FULL COVERAGE",
    price: "$40+",
  },
  {
    name: "DETOX FACIAL",
    price: "$45",
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
