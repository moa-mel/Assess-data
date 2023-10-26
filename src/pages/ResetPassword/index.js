import React, { useState } from 'react'
import './styles.css'
import lockk from "../../images/Password security icon.png"
import { eye } from "react-icons-kit/feather/eye"
import { lock } from 'react-icons-kit/feather/lock'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { Icon } from "react-icons-kit"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate();
  const { email } = useParams();
  const handleSubmit = (e) => {
    console.log(password)
    e.preventDefault();
    axios.post(`https://final-year-j646.onrender.com/api/auth/update-password`,
      {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then(res => {
        console.log(res.data)
        if (res.data.success) {
          navigate("/confirm");
          alert('Password Updated.')
        } else {
          alert('server err')
        }
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='reset-password'>
    <div className='rp-container'>
      <div className='reset-password-contain'>
        <div className='rp-contain'>
          <img className="rp-img" src={lockk} alt='' />
          <h2 className='rp-h2'>Reset Password</h2>
          <br />
          <form className='rp-form' onSubmit={handleSubmit}>
            <div className='new-password'>
              <span className='rp-span' >
                <Icon icon={lock} size={15} />
              </span>
              <input
                className='rp-input'
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder='Enter new password' />
              <span className='np-span' >
                <Icon icon={eye} size={15} />
              </span>
            </div>
            <div className='confirm-password'>
              <span className='rp-span'>
                <Icon icon={lock} size={15} />
              </span>
              <input
                className='rp-input'
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                placeholder='Confirm new password' />
              <span className='np-span'>
                <Icon icon={eye} size={15} />
              </span>
            </div>
            <button className='rp-button'>
              Reset Password
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ResetPassword 