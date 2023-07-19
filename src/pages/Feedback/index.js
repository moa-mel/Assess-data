import React from 'react'
import './styles.css'
import Navbar from "../../components/Navbar"
import { Divider } from '@chakra-ui/react'
import alrm from "../../images/alarm 2.png"
import cog from "../../images/cogwheel 1.png"
import file from "../../images/file-text 1.png"
import Gp from "../../images/Group.png"
import logout from "../../images/logout 1.png"
import menu from "../../images/menu_book 1.png"
import inbox from "../../images/move_to_inbox 1.png"
import Overview from "../../images/Overview.png"
import payment from "../../images/payment 1.png"

const Feedback = () => {

  return (
    <div className='feedback'>
      <Navbar />
      <div className='feed-main'>
        {/*Sidebar*/}
        <div className='feed-sidebar'>
          <div className='feed-side-contain'>
            <div className='feed-side'>
              <div className='feed-side-1'>
                <img className='feed-side-left-img' src={Gp} alt="" />
                <p className='feed-side-right-p'>Dashboard</p>
              </div>
              <div className='feed-side-2'>
                <img className='feed-side-left-img' src={Overview} alt="" />
                <p className='feed-side-right-p1'>Overview</p>
              </div>
              <div className='feed-side-3'>
                <img className='feed-side-left-img' src={menu} alt="" />
                <p className='feed-side-right-p2'>Results</p>
              </div>
              <div className='feed-side-4'>
                <img className='feed-side-left-img' src={payment} alt="" />
                <p className='feed-side-right-p3'>Payments</p>
              </div>
              <div className='feed-side-5'>
                <img className='feed-side-left-img' src={file} alt="" />
                <p className='feed-side-right-p4'>Reports</p>
              </div>
              <div className='feed-side-6'>
                <img className='feed-side-left-img1' src={cog} alt="" />
                <p className='feed-side-right-p5'>Settings</p>
              </div>
              <Divider bg='grey' />
              <br />
              <br />
              <div className='feed-side-7'>
                <img className='feed-side-left-img' src={inbox} alt="" />
                <p className='feed-side-right-p6'>Feedback</p>
              </div>
              <div className='feed-side-8'>
                <img className='feed-side-left-img2' src={alrm} alt="" />
                <p className='feed-side-right-p7'>Notification</p>
              </div>
              <div className='feed-side-9'>
                <img className='feed-side-left-img' src={logout} alt="" />
                <p className='feed-side-right-p8'>LogOut</p>
              </div>
            </div>
          </div>
        </div>

        <div className='feed-content'>
          <div className='feed-header'></div>
          <h2 className='feed-content-p'>Response</h2> 
          <div className='feed-content-low'>
            <div className='feed-low-left'>
              <div className='feed-left1'>
                <p className='feed-left-p'>Linda Oba</p>
                <p className='feed-left-p'>2.32pm</p>
              </div>
              <div className='feed-left2'>
                <p className='feed-left-p'>Anonymous</p>
                <p className='feed-left-p'>2.32pm</p>
              </div>
              <Divider />
              <div className='feed-left3'>
                <p className='feed-left-p'>Donald Banks</p>
                <p className='feed-left-p'>2.32pm</p>
              </div>
              <Divider />
              <div className='feed-left4'>
                <p className='feed-left-p'>Joe Peace</p>
                <p className='feed-left-p'>2.32pm</p>
              </div>
              <Divider />
              <div className='feed-left5'>
                <p className='feed-left-p'>Anonymous</p>
                <p className='feed-left-p'>2.32pm</p>
              </div>
              <Divider bg="black"/>
              <div className='feed-left6'>
                <p className='feed-left-p'>Greyson Lincoln</p>
                <p className='feed-left-p'>2.32pm</p>
              </div>
              <div className='feed-left7'>
                <p className='feed-left-p'>Anonymous</p>
                <p className='feed-left-p'>2.32pm</p>
              </div>
              <Divider />
              <div className='feed-left8'>
                <p className='feed-left-p'>Jobs Lebron</p>
                <p className='feed-left-p'>2.32pm</p>
              </div>
            </div>
            <div className='feed-low-right'>
              <h2 className='feed-low-p'>Linda Oba</h2>
              <div className='feed-right'>
                <p>such wonderful insights, now I know what schools to consider for my kids.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback