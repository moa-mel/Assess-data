import React from 'react'
import './styles.css'
import logimg from "../../images/undraw_secure_login_pdn4 1.png"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
    <div className='login-contain'>
    <div className='login-nav'>
     <p className='log-p'>You don't have an account?</p>
     <Link to='/register'>
     <button className='login-but'>Sign up</button>
     </Link>
     </div>
     <div className='login-container'>
     <div className='login-left'>
     <div className='login-img'>
     <img className='' src={logimg} alt=''/>
     </div>
     </div>
     <div className='login-right'>
     <form className='login-form'>
     <p className='login-form-p'>Welcome</p>
     <br/>
     <label>Phone No. or E-mail address</label>
     <input className="login-input-text"
     name="email"
      placeholder='E-mail Address' type='email'/>
      <label>Password</label>
     <input 
     placeholder='Password'
     name="password"
     className="login-input-text" 
     type='password'
     />
     <p className='input-p'>Forgetten password? click here</p>
     <br/>
     <Link to='/category'>
     <button className='login-button' type='submit"'>Login</button>
     </Link>
     <div className='login-p'>
     <p className='login-agreed'>I have read and agreed to the</p>
     <p className='login-terms'>Terms of Service</p>
     </div>
     </form>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Login
