import React from 'react'
import "./styles.css"
import Logo from "../../images/Oau_logo-removebg-preview 2.png"
import E3 from "../../images/Ellipse 3.png"
import V3 from "../../images/Vector 3.png"
import srch from "../../images/Search.png"


const Insight = () => {
  return (
    <div className='insight'>
    <div className='insight-header'>
    <img className='insight-logo' src={Logo} alt=""/>
    <div className="insight-search">
      <input type="text"  
      placeholder="Search..."
      className='insight-input' 
       />
       <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className="insight-end">
      <p className="insight-hp">Ola</p>
      <img className='insight-v3' src={V3} alt=""/>
      <img className='insight-e3' src={E3} alt=""/>
      </div>
    </div>
    <div className='insight-nav'>
    <h3>INSIGHTS</h3>
    <div className='insight-drop'>
    <div className='drop-1'>
    
    </div>
    <div className='drop-2'>
    
    </div>
    <div className='drop-3'>
    
    </div>
    </div>
    </div>
    <div className='insight-main'>
    
    </div>
    </div>
  )
}

export default Insight