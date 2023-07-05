import React from 'react'
import "./styles.css"
import fail from "../../images/pngegg (2) 1.png"
import { useNavigate } from 'react-router-dom';

const EmailFailed = () => {
  const navigate = useNavigate();
  
  setTimeout(() => 
  navigate("/register"
  ), 4000);

  return (
    <div className='emailfail'>
     <div className='emailfail-contain'>
       <div className='fail-container'>
       <div className='fail-contain'>
       <img className='fail-img' src={fail} alt=''/>
       <br/>
       <br/>
       <h2 className='fail-h2'>Your account wasn't created successfully</h2>
       <h4 className='fail-h4'>Please try again</h4>
       </div>
       </div>
     </div>
    </div>
  )
}

export default EmailFailed