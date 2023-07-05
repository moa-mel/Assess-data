import React from 'react'
import './styles.css'
import regimg from "../../images/undraw_Content_re_33px 1.png"
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
    <div className='reg-contain'>
    <div className='register-nav'>
     <p className='reg-p'>Already have an account?</p>
     <Link to='/login'>
     <button className='reg-but'>Login</button>
     </Link>
     </div>
     <div className='register-container'>
     <div className='register-left'>
     <div className='register-img'>
     <img className='' src={regimg} alt=''/>
     </div>
     </div>
     <div className='register-right'>
     <form>
     <p className='form-p'>Create Account</p>
     <br/>
     <div className='reg-fl'>
     <input className="reg-fl-input"
      placeholder='First Name' 
      name="firstName"
      type='text'/>
      <input className="reg-fl-input"
      placeholder='Other Names' 
      name="OtherNames"
      type='text'/>
      </div>
     <input className="input-text"
     name="email"
      placeholder='E-mail Address' type='email'/>
     <input className="input-text" 
     name="phone"
     placeholder='Phone Number' 
     type='tel' />
     <input className="input-text"
      placeholder='Address' 
      name="Address"
      type='text'/>
     <input 
     placeholder='Password'
     name="password"
     className="input-text" 
     type='password'
     />
     <Link to='/success'>
     <button className='reg-button' type='submit"'>Sign up</button>
     </Link>
     <div className='reg-p'>
     <p className='reg-agreed'>I have read and agreed to the</p>
     <p className='reg-terms'>Terms of Service</p>
     </div>
     </form>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Register