import React from 'react'
import './styles.css'
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"

const Feedback = () => {
 
  return (
    <div className='feedback'>
       <Navbar/>
       <div className='feed-main'>
       <Sidebar/>
       <div className='feed-content'>
       <p>Response </p>
       </div>
       </div>
    </div>
  )
}

export default Feedback