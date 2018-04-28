import React, { Component } from 'react';
import PackagedService from './services/PackagedService';

const packagedServiceList = [
  {
    price: "$23",
    name: "THE HIGHBALL",
    descriptions: [
      "High and Tight Buzz Cut & Cleanse. No muss, no fuss."
    ]
  },
  {
    price: "$29",
    name: "THE USUAL",
    descriptions: [
      "Traditional haircut.",
      "Cleanse ⬧ Haircut ⬧ Styling",
      "Two week complimentary touch up",
    ]
  },
  {
    price: "$34",
    name: "THE METROPOLITAN",
    descriptions: [
      "Modern day classic for the professional who likes to keep it simple and stylish, with a little pampering.",
      "Haircut  ⬧ Cleanse  ⬧ Paraffin hand treatment ⬧ Eyebrow  clean-up ⬧ Razor nape finishing  ⬧ Hot towel ⬧ Two week complimentary touch up",
    ]
  },
  {
    price: "$44",
    name: "THE OLD FASHIONED",
    descriptions: [
      "Being well groomed never goes out of style, turning Old School into New School.",
      "Haircut ⬧ Cleanse ⬧ Eyebrow clean-up ⬧ Beard trim  ⬧ Razor nape finishing ⬧ Hot towel ⬧ Beard oil and balm treatment",
    ]
  },
  {
    price: "$49",
    name: "THE WHITE RUSSIAN",
    descriptions: [
      "Appear refreshed, confident and youthful. Camouflage the grey with a blending tint. Leaves hair natural looking and fades without any pigment change.",
      "Cleanse ⬧ Haircut ⬧ Styling ⬧",
      "Two week complimentary touch up",
    ]
  },
  {
    price: "$65",
    name: "THE HOT TODDY",
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
        <div className="content con-padded flex col center-center">
          <div>Packaged Services</div>
          <div>
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
