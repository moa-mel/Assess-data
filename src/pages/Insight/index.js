import React from 'react'
import "./styles.css"
import Logo from "../../images/Oau_logo-removebg-preview 2.png"


const Insight = () => {
  return (
    <div className='insight'>
    <div className='insight-header'>
    <img src={Logo} alt=""/>
    <div className="insight-search">
      <input type="text"  
      placeholder="Search..."
      className='insight-input' 
       />
       <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <p>Ola</p>
    </div>
    <div className='insight-nav'>
    <p>INSIGHT</p>
    </div>
    <div className='insight-main'>
    
    </div>
    </div>
  )
}

export default Insight