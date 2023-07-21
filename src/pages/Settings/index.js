import React from 'react'
import "./styles.css"
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"

const Settings = () => {
    return (
        <div className='setting'>
        <Navbar />
        <div className='setting-main'>
          <Sidebar />
          <div className='setting-content'>
          
          </div>
        </div>
        </div>
    )}
export default Settings