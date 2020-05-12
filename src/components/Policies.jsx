import React, { Component } from 'react';

const policyList = [
  {
      title: "Pricing Disclaimer",
      contentList: [
          {
            type: 'text',
            content: "We do everything we can to ensure that the prices on our company website are correct. We try to make our prices competitive and constant. While we make every effort to provide you with the most accurate and up to date information, occasionally the cost of one or more of our products and/or services may change, either up or down, and thus may be mispriced online. Grooming Lounge Chicago barbershop reserves the right to refuse any request based on mispriced products or services."
          },
          {
            type: 'bullets',
            content: [
              "Prices may be changed at any time without further notice.",
              "We reserve the right to refuse any coupon/promotion at anytime without notice. Refusal is at the discretion of Grooming Lounge Chicago management",
              "Prices listed on any other website may not be accepted. Our Services and Products are listed on a number of websites (i.e., Google, Facebook Yelp, etc.) and we cannot control when they are updated. We reserve the right to refuse any price listed on any other website than our own."
            ]
          }
      ]
  },
  {
    title: "Gift Card Policy",
    contentList: [
        {
          type: 'text',
          content: "Grooming Lounge Chicago gift cards should be treated as cash. They are nontransferable, nonrefundable and nonexchangeable. Gift cards may be used to purchase merchandise and services; however, they cannot be used to purchase other gift cards. Please present your Grooming Lounge Chicago gift card at check out. Your sale will be deducted from your card balance. All remaining balances must remain on your card (i.e., no cash Value). Grooming Lounge Chicago is not responsible for lost, stolen, or damaged cards, or use without authorization."
        }
    ]
  },
  {
    title: "Refunds",
    contentList: [
        {
          type: 'text',
          content: "Retail Product return/Exchange policy:"
        },
        {
          type: 'text',
          content: "Grooming Lounge Chicago has a generous seven-day return policy on all unopened, unused or defective retail products. Customers have the option to return for a full refund or exchange for a similar product of equal value."
        },
        {
          type: 'text',
          content: "Used Products cannot be returned."
        }
    ]
  },
  {
    title: "Service Guarantee ",
    contentList: [
        {
          type: 'text',
          content: "We back our services 100%; if you are not satisfied with the service provided please let us know as soon as possible so we have the opportunity to make it right."
        },
        {
          type: 'text',
          content: "If you are not satisfied with the quality of your haircut and would like it corrected, we will honor a ‘redo’ at no cost to you within seven days of your original appointment."
        },
        {
          type: 'text',
          content: "If you choose to request a new and entirely different haircut than the one consulted with your barber/stylist at your original appointment, it will be considered a new haircut appointment and your service standard fee will apply. Excellent customer experience is our Mission. We will go the extra mile to correct any service situation to ensure your complete satisfaction."
        }
    ]
  },
  {
    title: "Cancellation and Tardiness policy and procedures",
    contentList: [
        {
          type: 'text',
          content: "Please arrive ten minutes before scheduled appointment."
        },
        {
          type: 'text',
          content: "We work very hard to schedule the right amount of time for each service and accommodating late guests is often impossible without disrupting every other guest scheduled that day. Please be aware in the unfortunate event you are late, we cannot guarantee your service will be performed that day; circumstances may require you to reschedule your appointment for another day."
        },
        {
          type: 'text',
          content: "At Grooming Lounge Chicago our goal is to provide quality and timely services for all of our valued clients. No-shows, late shows, and cancellations make it difficult to deliver and meet client expectations. Therefore, we would like to remind you of our policies and procedures regarding No-show appointments and late cancellations."
        }
    ]
  },
  {
    title: "Cancellation of an Appointment",
    contentList: [
        {
          type: 'text',
          content: "In order to be courteous to all guests of Grooming Lounge Chicago, please call the shop two hours in advance of your scheduled appointment in the event you are unable to fulfill your appointment. This will allow us to reallocate your appointment to another Guest. Last minute cancellation will result in a rebooking fee."
        }
    ]
  },
  {
    title: "How to cancel your appointment",
    contentList: [
        {
          type: 'text',
          content: "To cancel your appointment please call us at 773.342.1258. If you do not reach the receptionist, you may leave a detailed message on our voicemail. If you would like to reschedule your appointment, please leave your full name, phone number, and date and time of new appointment, and we will return your call to confirm."
        },
        {
          type: 'text',
          content: "Note: to ensure we receive your cancellation notice and to avoid subsequent fees, please refrain from cancelling your appointment via email or online."
        }
    ]
  },
  {
    title: "Late Cancellations",
    contentList: [
        {
          type: 'text',
          content: "A cancellation is considered to be late when the appointment is not cancelled within two hours of your scheduled appointment."
        }
    ]
  },
  {
    title: "No-show policy",
    contentList: [
        {
          type: 'text',
          content: "A no-show is a guest who fails to show for their scheduled appointment without the proper notice of cancellation. A no-show will require the rebooking fee of that appointment price, and will suspend your online booking account."
        }
    ]
  },
  {
    title: "ONE TIME COURTESY",
    contentList: [
        {
          type: 'text',
          content: "Grooming Lounge Chicago will not charge a fee for the first-time cancellation outside the allotted two hours of their scheduled appointment time. A second occurrence will result in a rebooking fee and credit card to be on file."
        },
        {
          type: 'text',
          content: "Grooming Lounge Chicago recognizes emergencies do sometimes happen. In the event of an emergency you may not be charged a no-show fee. However multiple and/or reoccurring late cancellation or no-shows on file will result in rebooking fees."
        }
    ]
  },
  {
    title: "Pet Policy",
    contentList: [
        {
          type: 'text',
          content: "As much as we love our furry companions the barbershop is not a good environment for pets. It is against The City of Chicago and Illinois Professional Health Regulations to have animals in a salon. We also have to consider our clients who may be allergic or not as ‘in love’ with pets as others may be."
        },
        {
          type: 'text',
          content: "ESA (EMOTIONAL SUPPORT ANIMALS) These are not regarded as a working service dog; working service dogs are allowed for the sight- and hearing-impaired."
        }
    ]
  },
  {
    title: "Kid Policy",
    contentList: [
        {
          type: 'text',
          content: "We are certain your kids are lovely, but the barbershop is not the ideal environment for children. Please use this time to unwind and enjoy the experience of Grooming Lounge Chicago."
        }
    ]
  },
  {
    title: "Privacy Policy",
    contentList: [
        {
          type: 'text',
          content: "We are committed to protecting your personal information and your right to privacy. We do not share or sell your information in any way to any outside entities; your information is used only for the business of Grooming Lounge Chicago."
        }
    ]
  }
]

const Bullets = ({ bullets }) => (
  <ul>
    {bullets.map(bullet => <li>{bullet}</li>)}
  </ul>
)

const Policy = ({ title, contentList }) => (
    <div className="policy">
        <div className="policy-title">{title}</div>
        {
            contentList.map(({ type, content }) => (
                type === "bullets" ? <Bullets bullets={content} /> :
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
