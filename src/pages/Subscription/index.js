import React from 'react'
import "./styles.css"
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"
import card from "../../images/wpf_bank-cards.png"
import paym from "../../images/payment 1.png"
import paytwo from "../../images/ic_twotone-payment.png"
import { Divider } from '@chakra-ui/react'
import fluent from "../../images/fluent_premium-person-20-regular.png"


const Subscription = () => {
  return (
    <div className='subscription' >
      <Navbar />
      <div className='subscription-main'>
        <Sidebar />
        <div className='subscription-content'>
          <div className='subscription-header'></div>
          <div className='subscription-main'>
            <div className="subscription-left">
              <div className="subscription-up">
                <h2 className="subscription-h2">Payment Method</h2>
                <p className="subscription-p">Current payment details</p>
                <div className="sub-top">
                  <img className="sub-top-img" src={paytwo} alt="" />
                  <div className="sub-top-side">
                    <p>MasterCard</p>
                    <p>6567 xxxx xxxx 8992</p>
                  </div>
                </div>
                <button className="sub-top-but">Remove Card</button>
              </div>
              <div className="subscription-down">
                <div className="sub-down">
                  <img className="sub-down-img" src={card} alt="" />
                  <h2 className="sub-down-h2">Change Payment Method</h2>
                </div>
                <p className="sub-down-p">Enter E-mail to get started</p>
                <label className="sub-down-label">
                  Enter Personal E-mail Address</label> <br />
                <input
                  className="sub-down-input"
                  type="email"
                  placeholder="Enter Personal E-mail Address"
                /><br />
                <label className="sub-down-label">
                  Enter Personal E-mail Address</label> <br />
                <input
                  className="sub-down-input"
                  type="email"
                  placeholder="Enter Organization E-mail Address"
                /><br />
                <button className="sub-down-butt">Submit</button>
              </div>
            </div>

            <div className="subscription-right">
              <div className="sub-right-down">
                <h2>Order Summary</h2>
                <div className="sub-down-up">
                  <div className="sub-down-div">
                    <img className="sub-side-img" src={fluent} alt="" />
                    <p className="sub-down-dp">Premium Plan <br />
                      ₦100000User <br />
                      Change Plan
                    </p>
                  </div>
                  <div className="sub-down-one">
                    <p>Plan Duration</p>
                    <p>One Year</p>
                  </div>
                  <div className="sub-down-two">
                    <p>No of Reports</p>
                    <p>Unlimited</p>
                  </div>
                  <Divider/>
                  <div className="sub-down-three">
                    <p></p>
                    <p>Unlimited</p>
                  </div>
                  <Divider/>
                  <div className="sub-down-four">
                    <p>Total Amount</p>
                    <p>₦120000/Month</p>
                  </div>
                  <button className="sub-side-but">Proceed to Invoice</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
