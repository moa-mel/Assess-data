import React from 'react'
import "./styles.css"
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"

const Subscription = () => {
  return (
    <div className='subscription'>
    <Navbar/>
    <div className='subscription-main'>
    <Sidebar/>
    <div className='subscription-content'>
    <p>Subscription </p>
    </div>
    </div>
    </div>
  )
}

export default Subscription
