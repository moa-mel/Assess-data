import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import Logo from "../../images/Oau_logo-removebg-preview 2.png"
import mainimg from "../../images/Group 31.png"
import mainvec from "../../images/Vector 6.png"

const Home = () => {

  return (
    <div className='home'>
    <div className='home-contain'> 
   {/* <Navbar/> */}
   <div className='container'>
   <div className='nav-logo'>
   <img className='logos' src={Logo} alt="" />
   </div>
   <div className='nav-items'>
    <ul>
    <Link className='nav-link' to="/register" >
    <li className='nav-li' >
    <a href="!#">Create Account</a>
    </li>
    </Link>
    <Link className='nav-log' to="/login" >
    <li className='nav-li' >
    <a href="!#">Login</a>
    </li>
    </Link>
    <li className='nav-li' >
    <a href="!#">Services</a>
    </li>
    </ul>
   </div>
   <div className='nav-button'>
    <button className='nav-but' >
    Visit our website
    </button>
   </div>
  </div> 
   {/*Main*/}
  <div className='wrapper'>
    <div className='left'>
    <h4 className='left-h4'>Over 40 million tested candidates</h4>
    <h2 className='left-h2'>Empowering the Future Today</h2>
    <p className='left-p'>Promoting sustainable human resource <br/>
     development and international co-<br/>
     operation through reliable educational <br/>
     assessment.</p>
     <br/>
    <button className='left-button'>Get Started</button>
    <br/>
    <br/>
    <div>
    <img className="mainvecimg" src={mainvec} alt=''/>
    </div>
    </div>
    <div className='right'>
    <img className='rightimg' src={mainimg} alt='' />
    </div>
    </div>

</div> 
   </div>
  )
}

export default Home