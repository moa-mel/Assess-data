import React, {useState} from 'react'
import './styles.css'
import { Select } from '@chakra-ui/react'
import Logo from "../../images/Oau_logo-removebg-preview 2.png"
import E3 from "../../images/Ellipse 3.png"
import { search } from 'react-icons-kit/feather/search'
import { Icon } from "react-icons-kit"
import alrm from "../../images/alarm 2.png"
import cog from "../../images/cogwheel 1.png"
import file from "../../images/file-text 1.png"
import Gp from "../../images/Group.png"
import logout from "../../images/logout 1.png"
import menu from "../../images/menu_book 1.png"
import inbox from "../../images/move_to_inbox 1.png"
import Overview from "../../images/Overview.png"
import payment from "../../images/payment 1.png"
import G20 from "../../images/Group 20.png"
import sort from "../../images/sort 2.png"
import sch from "../../images/Search.png"
import dots from "../../images/ph_dots-three-vertical-thin.png"
import {Link} from "react-router-dom"
import { Progress } from '@chakra-ui/react'
import axios from 'axios';

const Payment = () =>{
  const [activeTab, setActiveTab] = useState(0);
  const [paymentInitialized, setPaymentInitialized] = useState(false);
  const [url, setUrl]  = useState('')
  console.log(url)
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const initializePayment = async (e) => {

    const token =  localStorage.getItem("accessToken")
    console.log("okay")
    e.preventDefault()
    try {
      const response = await axios.post('https://final-year-project-ya34.onrender.com/api/transaction/make-payment', 
      {
        
      }, 
      {
        headers: {
          'Content-Type': 'application/json',
          "x-auth-token": `${token}`,
          // Add any required headers here, such as authentication tokens
        },
      });
      if (response.data.success) {
        // Payment initialized successfully
        setUrl(response.data.initializationUrl);
        setPaymentInitialized(true);
      } else {
        // Handle error if needed
      }
    } catch (error) {
      // Handle any network or other errors
    }
  };
 
  return(
    <div className='payment'>
      {/*header*/}
      <div className='payment-header'>
        <img className='payment-logo' src={Logo} alt="" />
        <div className="payment-search">
          <input type="text"
            placeholder="Search..."
            className='payment-input'
          />
          <span className='py-span' ><Icon icon={search} size={15} /></span>
        </div>
        <div className="payment-end">
          <Select variant='unstyled' placeholder="Mike">
            <option value='option1'>Profile</option>
          </Select>
          <img className='payment-e3' src={E3} alt="" />
        </div>
      </div>
      {/*main*/}
      <div className='pay-main'>
        {/*side*/}
        <div className='pay-side'>
          <div className='pay-side-contain'>
            <div className='pay-side-left'>
              <img className='pay-side-left-img' src={Gp} alt="" /> <br />
              <img className='pay-side-left-img' src={Overview} alt="" /> <br />
              <img className='pay-side-left-img' src={menu} alt="" /> <br />
              <img className='pay-side-left-img' src={payment} alt="" /> <br />
              <img className='pay-side-left-img' src={file} alt="" /> <br />
              <img className='pay-side-left-img' src={cog} alt="" /><br /><br />
              <img className='pay-side-left-img' src={inbox} alt="" /> <br />
              <img className='pay-side-left-img' src={alrm} alt="" /> <br /><br />
              <img className='pay-side-left-img' src={logout} alt="" />
            </div>
            <div className='pay-side-right'>
              <p className='pay-side-right-p'>Dashboard</p> <br />
              <p className='pay-side-right-p'>Overview</p> <br />
              <p className='pay-side-right-p'>Results</p> <br />
              <p className='pay-side-right-p'>Payments</p> <br />
              <p className='pay-side-right-p'>Reports</p> <br />
              <p className='pay-side-right-p1'>Settings</p> <br />
              <p className='pay-side-right-p2'></p><br />
              <Link to='/feedback'>
              <p className='pay-side-right-p'>Feedback</p> <br />
             </Link>
              <p className='pay-side-right-p'>Notification</p> <br /><br />
              <p className='pay-side-right-p'>LogOut</p>
            </div>
          </div>
        </div>
        {/*content*/}
        <div className='pay-content'>
          <div className='pay-content-top'>
            <div className="pay-top-left">
              <div className="pay-top">
                <div className="pay-toppp">
                <Link to='/subscription'>
                  <h2 className="pay-left-h2">Subscription</h2> 
                  </Link>
                  <div className="py-toppp">
                  {!paymentInitialized ? (
                    <p className="py-toppp-p" onClick={initializePayment}>plan</p>
                    ) : (
                      <p>Payment Initialized!</p>
                    )}
                    <Link to={url}>
                    <button className="py-toppp-but" >Pay per Report</button>
                    </Link>
                  </div>
                  <div className="py-hero">
                    <div className="py-wrap">
                    <p className="py-wrap-p">30 of 500 users</p>
                    <Progress colorScheme='purple' size='sm' value={20} />
                    </div>
                    <button className="py-h-but">Upgrade Plan</button>
                  </div>
                </div>
                <p className="py-toppp-p1">#100,000</p>
              </div>
              <div>

              </div>
            </div>
            <div className="pay-top-right">
              <p className="pay-right-p1">Next Payment </p> <br/>
              <p className="pay-right-p2">on February 27, 2021</p> <br />
              <button className="pay-right-button">Manage payment</button> <br />
            </div>
          </div>

          <div className='pay-content-down'>
             <div className='pay-down-up'>
             <p className='pay-down-p1'>Payment</p>
             <p 
             className={activeTab === 0 ? 'active' : ''}
          onClick={() => handleTabClick(0)}
             >All payment</p>
             <p 
             className={activeTab === 1 ? 'active' : ''}
             onClick={() => handleTabClick(1)}
             >Failed</p>
             <p 
             className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
             >Complete</p>
             <div className='pay-down-side'>
             <img className='pay-down-img' src={sort} alt='' />
             <img className='pay-down-ig' src={sch} alt='' />
             </div>
             </div>
             <br/>
             
             {activeTab === 0 &&
              <>
             <div className="pay-other">  
             <div className='pay-other-one'>
                <img className='pay-other-1' src={G20} alt=''/>
                <p className='pay-other-p'>Invoice_2021/10.pdf</p>
                <p className='pay-other-p1'>Date of invoice</p>
                <p className='pay-other-p2'>Oct 02, 2021</p>
                <img className='pay-other-img' src={dots} alt=''/>
              </div>
             </div>
             
            </>
            }
            
             <div className='' id="Failed">
             {activeTab === 1 &&
             <p>Failed, sorry!</p> }
             </div>

             <div className='' id="Complete">
             {activeTab === 2 &&
             <p>complete, yeah.</p> }
             </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Payment