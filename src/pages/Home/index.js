import React, {useState, useEffect} from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import Logo from "../../images/Oau_logo-removebg-preview 2.png"
import mainimg from "../../images/Group 31.png"
import mainvec from "../../images/Vector 6.png"
import {FaBars, FaTimes} from 'react-icons/fa';

const Home = () => {
  const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click)

  return (
    <div className='home'>
      <div className='home-contain'>
        {/* <Navbar/> */}
        <div className='container'>
          <div className='nav-logo'>
            <img className='logos' src={Logo} alt="" />
          </div>
         
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <Link className='nav-link' to="/register" >
                <li className='nav-li' >
                  Create Account
                </li>
              </Link>
              <Link className='nav-link' to="/login" >
                <li className='nav-li' >
                  Login
                </li>
              </Link>
              <li className='nav-li' >
                Services
              </li>
              <li className='nav-li'>
                <div>
            <button className='nav-but' >
              Visit our website
            </button>
            </div>
            </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
           {click ? (<FaTimes size={20} style={{color: '#333'}} />) : 
           (<FaBars size={20} style={{color: '#333'}} />)}
           </div>
         
        </div>
        {/*Main*/}
        <div className='hero-wrapper'>
          <div className='left'>
            <h4 className='left-h4'>Over 40 million tested candidates</h4>
            <h2 className='left-h2'>Empowering the Future Today</h2>
            <p className='left-p'>Promoting sustainable human resource <br />
              development and international co- <br />
              operation through reliable educational <br />
              assessment.</p>
            <br />
            <button className='left-button'>Get Started</button>
            <br />
            <br />
            <div>
              <img className="mainvecimg" src={mainvec} alt='' />
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