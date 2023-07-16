import React from 'react'
import './styles.css'
import { Select } from '@chakra-ui/react'
import Logo from "../../images/Oau_logo-removebg-preview 2.png"
import E3 from "../../images/Ellipse 3.png"
import { search } from 'react-icons-kit/feather/search'
import { Icon } from "react-icons-kit"

const Navbar = () => {
  return (
    <div className='navbar'>
    <img className='navbar-logo' src={Logo} alt="" />
    <div className="navbar-search">
      <input type="text"
        placeholder="Search..."
        className='navbar-input'
      />
      <span className='navbar-span' ><Icon icon={search} size={15} /></span>
    </div>
    <div className="navbar-end">
      <Select variant='unstyled' placeholder="Mike">
        <option value='option1'>Profile</option>
      </Select>
      <img className='navbar-e3' src={E3} alt="" />
    </div>
    </div>
  )
}

export default Navbar
