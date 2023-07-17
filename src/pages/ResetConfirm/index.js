import React from 'react'
import "./styles.css"
import rconfirm from "../../images/akar-icons_circle-check-fill.png"
import { useNavigate } from 'react-router-dom';

const ResetConfirm = () => {
  const navigate = useNavigate();
  
  setTimeout(() => 
  navigate("/login"
  ), 1000);

  return (
    <div className='reset-confirm'>
    <div className='rc-container'>
    <div className='reset-confirm-contain'>
      <div className='rc-contain'>
        <img className='rc-img' src={rconfirm} alt=''/>
        <br/>
        <h4 className='rc-h4'>Congratulations!🎉</h4>
        <br/>
        <p className='rc-p'>Your password was reset successfully.</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ResetConfirm