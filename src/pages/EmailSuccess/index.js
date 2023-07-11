import React from 'react'
import './styles.css'
import success from "../../images/pngegg (1) 1.png"
import { useNavigate } from 'react-router-dom';

const EmailSuccess = () => {
  const navigate = useNavigate();
  
  setTimeout(() => 
  navigate("/category"
  ), 1000);
  return (
    <div className='emailsuccess'>
     <div className='emailsuccess-contain'>
       <div className='success-container'>
       <div className='success-contain'>
       <img className='success-img' src={success} alt=''/>
       <br/>
       <br/>
       <h2 className='success-h2'>Your account has been created</h2>
       <h4 className='success-h4'>Please proceed to confirm your registration</h4>
       </div>
     </div>
     </div>
    </div>
  )
}

export default EmailSuccess