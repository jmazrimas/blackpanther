import React, { Component } from 'react';
import PackagedService from './services/PackagedService';

import hottoddy from '../images/services/hottoddy.jpg';
import oldfashioned from '../images/services/oldfashioned.jpg';
import whiterussian from '../images/services/whiterussian.jpg';
import highball from '../images/services/highball.jpg';
import metropolitan from '../images/services/metropolitan.jpg';
import theusual from '../images/services/theusual.jpg';

const packagedServiceList = [
  {
    price: "$23",
    name: "THE HIGHBALL",
    image: highball,
    descriptions: [
      "High and Tight Buzz Cut & Cleanse. No muss, no fuss."
    ]
  },
  {
    price: "$29",
    name: "THE USUAL",
    image: theusual,
    descriptions: [
      "Traditional haircut.",
      "Cleanse ⬧ Haircut ⬧ Styling",
      "Two week complimentary touch up",
    ]
  },
  {
    price: "$34",
    name: "THE METROPOLITAN",
    image: metropolitan,
    descriptions: [
      "Modern day classic for the professional who likes to keep it simple and stylish, with a little pampering.",
      "Haircut  ⬧ Cleanse  ⬧ Paraffin hand treatment ⬧ Eyebrow  clean-up ⬧ Razor nape finishing  ⬧ Hot towel ⬧ Two week complimentary touch up",
    ]
  },
  {
    price: "$44",
    name: "THE OLD FASHIONED",
    image: oldfashioned,
    descriptions: [
      "Being well groomed never goes out of style, turning Old School into New School.",
      "Haircut ⬧ Cleanse ⬧ Eyebrow clean-up ⬧ Beard trim  ⬧ Razor nape finishing ⬧ Hot towel ⬧ Beard oil and balm treatment",
    ]
  },
  {
    price: "$49",
    name: "THE WHITE RUSSIAN",
    image: whiterussian,
    descriptions: [
      "Appear refreshed, confident and youthful. Camouflage the grey with a blending tint. Leaves hair natural looking and fades without any pigment change.",
      "Cleanse ⬧ Haircut ⬧ Styling ⬧",
      "Two week complimentary touch up",
    ]
  },
  {
    price: "$65",
    name: "THE HOT TODDY",
    image: hottoddy,
    descriptions: [
      "Rejuvenating men’s face treatment for the C-suite executive to the construction worker; every man should have a good facial regimen.",
      "Cleansing ⬧ Toning ⬧ Exfoliation ⬧ Skin hydration ⬧ Hot towel ⬧ Cleanse ⬧ Haircut ⬧ Styling",
      "Two week complimentary touch up",
    ]
  }
]

class PackagedServices extends Component {
  render() {
    return (
      <div className="services">
        <div className="content con-padded flex col">
          <div className="section-title">Packaged Services</div>
          <div className="service-list packaged">
            {
              packagedServiceList.map(ps => (<PackagedService service={ps} />))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default PackagedServices;
