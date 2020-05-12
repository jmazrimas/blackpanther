import React, { Component } from 'react';

const policyList = [
    {
        title: "Pricing Disclaimer",
        contentList: [
            {
                content: "We do everything we can to ensure that the prices on our company website are correct. We try to make our prices competitive and constant. While we make every effort to provide you with the most accurate and up to date information, occasionally the cost of one or more of our products and/or services may change, either up or down, and thus may be mispriced online. Grooming Lounge Chicago barbershop reserves the right to refuse any request based on mispriced products or services."
            }
        ]
    }
]

const Policy = ({ title, contentList }) => (
    <div className="policy">
        <div className="policy-title">{title}</div>
        {
            contentList.map(({ content }) => (
                <div>{content}</div>
            ))
        }
    </div>
)

class Policies extends Component {
  render() {
    return (
      <div className="policies">
        <div className="content con-padded flex col">
          <div className="section-title">Policies</div>
          <div class="policy-list">
            {
                policyList.map(policy => <Policy {...policy} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Policies;
