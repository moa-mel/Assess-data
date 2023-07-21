import React from 'react'
import './styles.css'
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
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='side-contain'>
        <div className='side'>
          <div className='side-1'>
            <img className='side-left-img' src={Gp} alt="" />
            <p className='side-right-p'>Dashboard</p>
          </div>
          <div className='side-2'>
            <img className='side-left-img' src={Overview} alt="" />
            <p className='side-right-p1'>Overview</p>
          </div>
          <div className='side-3'>
            <img className='side-left-img' src={menu} alt="" />
            <p className='side-right-p2'>Results</p>
          </div>
          <div className='side-4'>
            <img className='side-left-img' src={payment} alt="" />
            <p className='side-right-p3'>Payments</p>
          </div>
          <div className='side-5'>
            <img className='side-left-img' src={file} alt="" />
            <p className='side-right-p4'>Reports</p>
          </div>
          <div className='side-6'>
            <img className='side-left-img1' src={cog} alt="" />
            <Link to='/settings'>
            <p className='side-right-p5'>Settings</p>
            </Link>
            </div>
          <Divider bg='grey' />
          <br />
          <br />
          <div className='side-7'>
            <img className='side-left-img' src={inbox} alt="" />
            <p className='side-right-p6'>Feedback</p>
          </div>
          <div className='side-8'>
            <img className='side-left-img2' src={alrm} alt="" />
            <p className='side-right-p7'>Notification</p>
          </div>
          <div className='side-9'>
            <img className='side-left-img' src={logout} alt="" />
            <p className='side-right-p8'>LogOut</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
