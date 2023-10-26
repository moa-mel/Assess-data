import React, { useState } from 'react'
import "./styles.css"
import axios from 'axios';
import lock from "../../images/Password security icon.png"
import { useNavigate, useParams} from 'react-router-dom';

const ResetOtp = () => {
  const navigate = useNavigate();
  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');
  const [digitFive, setDigitFive] = useState('');
  const [digitSix, setDigitSix] = useState('');
  const { email } = useParams();
  console.log("loaded", email)
  const handleSubmit = async e => {
    //TODO: look for how u would pass the code down to the function, create a state for the code and pass it down to the function
    e.preventDefault();
    const token =
      digitOne + digitTwo + digitThree + digitFour + digitFive + digitSix;
    await axios
      .post(
        `https://final-year-j646.onrender.com/api/auth/confirm-token`,
        { token, email }
      )
      .then(res => {
        console.log(res.data)
        if (res.data.success) {
          navigate(`/resetpassword/${email}`)
          alert('Password pending.')
        } else {
          alert('server err / wrong OTP')
        }
      }).catch(err => {
        console.log(err)
      })
  };

  return (
    <div className='reset-otp'>
    <div className='ro-contain'>
      <div className='reset-otp-contain'>
        <div className='ro-container'>
          <img className='ro-img' src={lock} alt='' />
          <h2 className='ro-h2'>Reset Password</h2>
          <p className='ro-p'>
            Enter the OTP code that was sent to your mail to proceed
            <br /> to the next stage
          </p>
          <form className='ro-form' onSubmit={handleSubmit} method="POST">
            <input
              className='ro-input'
              type="text"
              maxLength="1"
              onChange={e => setDigitOne(e.target.value)} />
            <input
              className='ro-input'
              type="text"
              maxLength="1"
              onChange={e => setDigitTwo(e.target.value)} />
            <input
              className='ro-input'
              type="text"
              maxLength="1"
              onChange={e => setDigitThree(e.target.value)} />
            <input
              className='ro-input'
              type="text"
              maxLength="1"
              onChange={e => setDigitFour(e.target.value)}
            />
            <input
              className='ro-input'
              type="text"
              maxLength="1"
              onChange={e => setDigitFive(e.target.value)}
            />
            <input
              className='ro-input'
              type="text"
              maxLength="1"
              onChange={e => setDigitSix(e.target.value)} />
            <br />
            <br />
            <button className='ro-button'>
              Enter
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ResetOtp