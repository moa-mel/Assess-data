import React from 'react'
import "./styles.css"
import Logo from "../../images/Oau_logo-removebg-preview 2.png"
import {Search} from '@mui/icons-material';

const Insight = () => {
  return (
    <div className='insight'>
    <div className='insight-header'>
    <img src={Logo} alt=""/>
    <form>
      <input type="text"  
      placeholder="Search..."
      className='insight-input' 
       />
       <i className="fa fa-search"></i>
      </form>

    </div>
    <div className='insight-nav'>
    
    </div>
    <div className='insight-main'>
    
    </div>
    </div>
  )
}

export default Insight