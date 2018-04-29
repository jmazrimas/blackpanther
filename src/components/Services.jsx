import React, { Component } from 'react';
import BasicService from './services/BasicService';

const serviceList = [
  {
    name: "HAIRCUTS",
    price: "$29/$34",
  },
  {
    name: "BUZZ CUT",
    price: "$21",
  },
  {
    name: "YOUNG MEN 6 TO 12",
    price: "$24",
  },
  {
    name: "HAIR AND SCALP TREATMENT",
    price: "$20",
  },
  {
    name: "COLOR BLENDING OR FULL COVERAGE",
    price: "$40+",
  },
  {
    name: "MOUSTACHE AND BEARD TRIM",
    price: "$15",
  },
  {
    name: "URBAN SHAVE (HOT TOWEL , BALM)",
    price: "$35",
  },
  {
    name: "PARAFFIN HAND WAX",
    price: "$15",
  },
  {
    name: "WAXING : BROW",
    price: "$15",
  },
  {
    name: "WAXING: NECK",
    price: "$15",
  },
  {
    name: "WAXING: CHEST OR BACK",
    price: "$45+",
  },
  {
    name: "CHEST TRIM",
    price: "$20+",
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
        </div>
      </div>
    );
  }
}

export default Services;
