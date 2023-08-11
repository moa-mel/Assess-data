import React, { useState } from 'react'
import "./styles.css"
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"
import phone from "../../images/fluent_phone-add-24-regular.png"
import mdi from "../../images/mdi_email-sync-outline.png"

const Settings = () => {
  const [value, setValue] = useState()
  return (
    <div className='setting'>
      <Navbar />
      <div className='setting-main'>
        <Sidebar />
        <div className='setting-content'>
          <div className='set-top'>
            <div className='set-tp'>
              <img className='set-tp-img' src={phone} alt='' />
              <div className='set-t'>
                <p className='set-t-p'>Change or Add Phone No</p>
                <p className='set-t-p1'>Delete Phone No.</p>
              </div>
            </div>
        {/*<div className="set-input"> */}
              
              
             {/* </div> */}
          </div>
          <div className='set-down'>
            <div className='set-dn'>
              <img className='set-dn-img' src={mdi} alt="" />
              <div className='set-d'>
                <p className='set-d-p'>E-mail Address Settings</p>
                <p className='set-d-p1'>Delete E-mail address</p>
              </div>
            </div>
            <p className='set-down-p'>Click here to verify Email Address</p>
            <label className="set-down-label">
              Change Personal E-mail Address</label> <br />
            <input
              className="set-down-input"
              type="email"
              placeholder="Enter Personal E-mail Address"
            /><br />
            <label className="set-down-label">
              Change Personal E-mail Address</label> <br />
            <input
              className="set-down-input"
              type="email"
              placeholder="Enter Organization E-mail Address"
            /><br />
            <button className="set-down-butt">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Settings